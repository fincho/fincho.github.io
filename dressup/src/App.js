// some imports idk yet what though probably the folder and react
import React, { useEffect, useState } from 'react';
import './assets/scss/sassOutlineForFroggyGame.scss';


function FroggyDressUp() {

	const items = {"bg": 2, "hat": 2, "body": 2, "acc": 1, "face": 2, "credits": 0};

	const [bgState, setBgState] = useState("transparent.png");
	const [hatState, setHatState] = useState("transparent.png");
	const [bodyState, setBodyState] = useState("transparent.png");
	const [accState, setAccState] = useState("transparent.png");
	const [faceState, setFaceState] = useState("transparent.png");
	const [creditState, setCreditState] = useState("transparent.png");
	//const [tabState, setTabState] = useState('<img class="gridimg" src={images["bg1.png"]} onClick={() => selectbg("bg1.png")}></img>');

	function selectbg(name) {
		setBgState(name);
	}

	function selecthat(name) {
		setHatState(name);
	}

	function selectbody(name) {
		setBodyState(name);
	}

	function selectacc(name) {
		setAccState(name);
	}

	function selectface(name) {
		setFaceState(name);
	}

	function selectcredit(name) {
		setCreditState(name);
	}

	useEffect(() => { setBgState(bgState); }, [bgState]);
	useEffect(() => { setHatState(hatState); }, [hatState]);
	useEffect(() => { setBodyState(bodyState); }, [bodyState]);
	useEffect(() => { setAccState(accState); }, [accState]);
	useEffect(() => { setFaceState(faceState); }, [faceState]);
	useEffect(() => { setCreditState(creditState); }, [bgState]);

	function importAll(r) {
		let images = {};
		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
		return images;
	  }
	  
	const images = importAll(require.context('./assets/img', false, /\.(png|jpe?g|svg)$/));
	
	function makeGrid(name) {
		/*check number of elements <= 9
		 *if == 9, make grid normally, else
		 *fill as much as you can
		 setGridState("bgs0")
		 */
		var codeBlock = '';
		var select = 'select' + name + '(';
		//alert(select);
		var gridBody = document.getElementById("gridBody");
		gridBody.innerHTML= '';
		for (var i = 0; i <= 21/*items[name]*/; i = i + 1) {
			var filename = name + String(i%(items[name]+1)) + '.png';
			//var onclick = ' onclick={() => ' + select + '"' + filename + '");}'; //THIS LINE IS THE ISSUE GDI)
			//var curline = '<img id="'+ filename + '"' + onclick + ' class="gridimg"' + ' src=' + images[filename] + '></img>';
			//alert(curline);
			//codeBlock += curline;
			//alert(filename);

			var newImage = document.createElement("img");
			newImage.className = "gridimg";
			newImage.setAttribute("id", filename);
			//newImage.setAttribute("onClick", '() => ' + select + '"' + filename + '")');
			newImage.setAttribute("src", images[filename]);
			if (i % (items[name]+1) == 0) { filename = 'transparent.png'; }
			switch (name) {
				case "bg":
					(function(localFilename) { newImage.addEventListener("click", function() {  selectbg(localFilename); }); })(filename)
					break;
				case 'hat':
					(function(localFilename) { newImage.addEventListener("click", function() {  selecthat(localFilename); }); })(filename)
					break;
				case 'body':
					(function(localFilename) { newImage.addEventListener("click", function() {  selectbody(localFilename); }); })(filename)
					break;
				case 'acc':
					(function(localFilename) { newImage.addEventListener("click", function() {  selectacc(localFilename); }); })(filename)
					break;
				case 'face':
					(function(localFilename) { newImage.addEventListener("click", function() {  selectface(localFilename); }); })(filename)
					break;
				case 'credit':
					(function(localFilename) { newImage.addEventListener("click", function() {  selectcredit(localFilename); }); })(filename)
					break;
			}
			gridBody.append(newImage);
		}
		//setTabState(codeBlock);
		//document.getElementById("gridBody").dangerouslySetInnerHTML = codeBlock;
		console.log(document.getElementById("gridBody").innerHTML);
		/*for (var i = 0; i < items[name]; i++) {
			var filename = name + String(i+1) + '.png';
			var element = document.getElementById(filename);
			var selectfn = () => {};
			switch(name) {
				case "bg":
					selectfn = selectbg;
					break;
				case "hat":
					selectfn = selecthat;
					break;
				case "body":
					selectfn = selectbody;
					break; 
				case "acc":
					selectfn = selectacc; 
					break; 
				case "face":
					selectfn = selectface;
					break;
				case "credit":
					selectfn = selectcredit;
					break;
			}
			element.setAttribute("onclick", 'select' + name + '("' + filename + '")');
			//element.addEventListener("click", function() { selectfn(filename); });
		}*/
	}
	
	function selectTab(name) {
		/*when the user clicks a tab, we use this function
		 *to switch to the 0th tab of that category
		 *would look something like:
		 setGridState(name);
		 */
		//alert("you selected " + name);
		makeGrid(name);
	}
	
	function saveImage() {
		/*idk how this would work, will need to be googled
		 *but i feel like it's important
		 saveToUserComputerWhichWeDefinitelyHaveAccessTo(); 
		 */
		
	}
	//todo, add meaningful alt text?
	/* this has id background in the tutorial but idk if that's strictly necessary */
	//<img class="gridimg" src={images['bg1.png']} onClick={() => selectbg("bg1.png")}></img>
	return (
		//here comes the html,
		<div className="FroggyDressUp">
			<div id="frogContainer">
				<div id="frog"> 
					<div id="frogbody">
						<img class="frogBg" src={images[bgState]}/>
						<img class="frogBase" src={images['frog_base.png']}/>
						<img class="frogHat" src={images[hatState]}/>
						<img class="frogBody" src={images[bodyState]}/>
						<img class="frogFace" src={images[faceState]}/>
						<img class="frogAcc" src={images[accState]}/>
						<img class="border" src={images['transparent.png']}/>
					</div>
					<button id="BGButton" onClick={() => selectTab("bg")}>BG</button>
					<button value="HAT" id="HATButton" onClick={() => selectTab("hat")}>HAT</button>
					<button value="BODY" id="BODYButton" onClick={() => selectTab("body")}>BODY</button>
					<button value="ACC" id="ACCButton" onClick={() => selectTab("acc")}>ACC</button>
					<button value="FACE" id="FACEButton" onClick={() => selectTab("face")}>FACE</button>
					<button value="C" id="CButton" onClick={() => selectTab("c")}>C</button>

				</div>

				
			
				<div id="optionContainer">
					<div id="grid">
						<div id="gridBody">
						</div>
					</div>
				</div> 
			</div>
			
			
			
			
			<input type="button" value="SAVE" id="SAVEButton" onClick={() => saveImage()}/>
		</div>

	);
}
	
export default FroggyDressUp