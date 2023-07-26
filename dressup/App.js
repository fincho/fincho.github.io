// some imports idk yet what though probably the folder and react
import React, { useState } from 'react';
import './assets/scss/sassOutlineForFroggyGame.scss';


function FroggyDressUp() {

	const items = {"bg": 2, "hat": 2, "body": 2, "acc": 1, "face": 2, "credits": 0};

	const [bgState, setBgState] = useState("bg1.png");
	const [hatState, setHatState] = useState("hat1.png");
	const [bodyState, setBodyState] = useState("body1.png");
	const [accState, setAccState] = useState("acc1.png");
	const [faceState, setFaceState] = useState("face1.png");
	const [creditState, setCreditState] = useState("credit0.png");

	function selectbg(name) {
		setBgState(name);
	}

	function selecthat(name) {
		setHatState(name);
	}

	function selectbody(name) {
		setHatState(name);
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
		for (var i = 0; i < items[name]; i++) {
			var filename = name + String(i+1) + '.png';
			var onclick = ' onClick=' + select + filename + ')';
			var curline = '<img class="gridimg"'+ onclick + ' src=' + images[filename] + '></img>';
			alert(curline);
			codeBlock += curline;
		}

		document.getElementById("gridBody").innerHTML = codeBlock;
		
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
	return (
		//here comes the html,
		<div className="FroggyDressUp">
			<div id="frogContainer">
				<div id="frog"> 
					<div id="frogbody">
						<img class="frogBg" src={images[bgState]}/>
						<img class="frogBase" src={images['frog_base.png']}/>
						<img class="frogBody" src={images[bodyState]}/>
						<img class="frogFace" src={images[faceState]}/>
						<img class="frogAcc" src={images[accState]}/>
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
							<img class="gridimg" src={images['bg1.png']}></img>
						</div>
					</div>
				</div> 
			</div>
			
			
			
			
			<input type="button" value="SAVE" id="SAVEButton" onClick={() => saveImage()}/>
		</div>

	);
}
	
export default FroggyDressUp