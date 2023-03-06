/**
 * Gacha.js contains all the logic for Rodentpon.
 * This is the parent javascript file. Other files are
 * supplementary for organization purposes.
 * @owner tono email@email.com
 * @author Kredgons and Crobats, do not use without permission.
 * @year Built 2023
 *
 * @TODO remove all console logs and unnecessary comments.
 * @TODO create a loading state and error state
*/

var cards = RODENT_CARDS;
var state = {
  'clickMeClose': false,
};

var welcomeMessages = [
  'Your rodents have been waiting for you!',
  'Your rodents have been skittering at the thought of your return!',
  'Your rodents have been squeaking your name for hours!',
  'That\'s totally rat-ical!',
  'All rodents are valuable; rarity is human construct.',
  'It\'s squeak-o-clock!',
  'Is cheese healthy for rodents?',
  'Are you ready to meet your new BFF, Best Frodent Forever?',
  'Ratatouille looks pretty tasty.'
];

var spacejamLyrics = "Everybody get up it's time to slam now We got a real jam goin' " +
"down Welcome to the Space Jam Here's your chance, do your dance At the Space Jam Alright Come on and slam, " +
"and welcome to the jam Come on and slam, if you wanna jam Hey you, watcha gonna do " +
"Hey you, watcha gonna do Hey you, watcha gonna do Hey you, watcha gonna do Party people in the house lets go " +
"It's your boy Jayski a'ight so Pass that thing and watch me flex Behind my back, you know what's next To the jam, all in your face " +
"Wassup, just feel the bass Drop it, rock it, down the room Shake it, quake it, space KABOOM Just work that body, work that body " +
"Make sure you don't hurt nobody Get wild and lose your mind Take this thing into over-time Hey DJ, TURN IT UP QCD, goin' burn it up C'mon y'all get on… "

/**
 * Called on page load.
*/
window.onload = function() {
  let messageCenter = document.querySelector(".message-center");
  let machine = document.querySelector("#rodentpon");
  let visited = window.localStorage.getItem("visitedBefore");
  let collectionContainer = document.querySelector('#collection-container');
  let collectionView = document.querySelector('#saved-cards');
  let clickMe = document.querySelector(".click-me");
  let welcomeOn = document.querySelector(".welcome-container");

  let currentMode = 'day';
  let changeLayoutModeRegular = document.querySelector('#regular-mode');
  let changeLayoutModeSpaceJam = document.querySelector('#spacejam-mode');

  welcomeOn.style.display = "block";
  
  window.onclick = function(e) {
   if (e.target == welcomeOn) {
  welcomeOn.style.display = "none";
   }
  }

  state.clickMeClosed = false;

  if (visited) {
    messageCenter.innerHTML = "Welcome back to Rodentpon, friend!<br />" + welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    state.clickMeClosed = true;
  } else {
    clickMe.style.display = "block";
    clickMe.addEventListener('click', function (e) {
      e.preventDefault;
      retrieveCard();
      onclickBounceAnimation(machine);
      if (state.clickMeClosed === false) {
        clickMeCloseAnimation();
        state.clickMeClosed = true;
      }
      if (window.getComputedStyle(collectionContainer, null).display === "block") {
        switchView();
      }
      messageCenter.innerHTML = "Thank you for playing. <br /> <span class='support'>Support</span our artists!";
      if (currentMode === 'night') document.querySelector('.support').style.color='#157e91';
      document.querySelector(".support").addEventListener('click', function(e) {
        openModal();
        buildArtistModal();
      });
    }, false);

  }

  machine.addEventListener('click', function (e) {
    e.preventDefault;
    retrieveCard();
    onclickBounceAnimation(machine);
    if (state.clickMeClosed === false) {
      clickMeCloseAnimation();
      state.clickMeClosed = true;
    }
    if (window.getComputedStyle(collectionContainer, null).display === "block") {
      switchView();
    }
    messageCenter.innerHTML = "Thank you for playing. <br/> <span class='support'>Support</span> our artists!";
    if (currentMode === 'night') document.querySelector('.support').style.color='#157e91';
    document.querySelector(".support").addEventListener('click', function(e) {
      openModal();
      buildArtistModal();
    });
  }, false)

  /* DELETE AFTER TESTING 
   document.querySelector("#clearStorage").addEventListener('click', function(e) {
     localStorage.clear();
     window.location.reload();
     return false;
   });
  */

  document.querySelector("#switch-cards").addEventListener('click', function(e) {
    switchView();
  });

  changeLayoutModeRegular.addEventListener('click', function (e) {
    currentMode = switchLayoutMode('regular', currentMode);
  }, false);

  changeLayoutModeSpaceJam.addEventListener('click', function (e) {
    currentMode = switchLayoutMode('spacejam', currentMode);
  }, false);


  buildLibraryOnload();
}

/**
 * Called when a user clicks #rodentpon button
 * This begins the gacha process. If
 * looking for a bug, start here.
 * @param {none}
 * @return {void}
*/
function retrieveCard() {
  state['loading'] = true;

  //First, get rarity of rodent that we'll select
  let rodent = getRarity();

  // This works by getting a random index from cards.rarity
  // then re-assigning rodent to the random index
  const keys = Object.keys(rodent);
  const randomKeyName = keys[Math.floor(Math.random() * keys.length)];
  rodent = rodent[randomKeyName];

  // Add the rodent to the user's screen
  addRodent(rodent, randomKeyName);
  if (!rodentExists(randomKeyName)) {
    saveToLibrary(rodent, randomKeyName);
    // newCardModal(rodent);
  }
}

/**
 * Select rarity between 3 possibilities:
 * "ultra rare", "rare", and "common"
 * @TODO rename "uncommon" to "rare" and "rare" to "ultra rare"
 * @param {none}
 * @return {object} containing all the cards of chosen rarity
*/
function getRarity() {
  let rodentRarity = 0;
  let rarityOptions = {
    'rare': 10,
    'uncommon': 35,
    'common': 55
  };

  let chance = Math.floor(Math.random() * 100);

  if (chance < rarityOptions.rare) {
    rodentRarity = cards.rare;
  } else if (chance < rarityOptions.uncommon) {
    rodentRarity = cards.uncommon;
  } else {
    rodentRarity = cards.common;
  }

  return rodentRarity;
}

/**
 * Add to HTML inventory. Creates a div and adds the rodent to the front.
 * @param {object} rodent the chosen rodent
 * @return {void}
*/
function addRodent(rodent, rodentKey) {
  let rodentCard = document.createElement("div");
  let newText = document.createElement("div");
  rodentCard.className = 'card show-artist slide-card';
  rodentCard.innerHTML = "<img src='"+ rodent.image +"' alt='Card for " + rodent.name + ". Description states, "+ rodent.description +"' tabindex='0' name="+rodentKey+" / >";
  document.getElementById('card-library-content').prepend(rodentCard);
  rodentCard.onclick = function() {
      artistCreditsModal(rodentKey);
  }

  newText.className = 'new-card-text';
  newText.innerHTML = '<br />'

  cardAnimation(rodentCard);
  rodentCard.prepend(newText);

  if(!rodentExists(rodentKey)) {
    newText.innerHTML = "NEW";
  }
}

/**
 * Switch the card views.
 * @return {void}
*/
function switchView() {
  let collectionView = document.querySelector('#collection-container');
  let newCards = document.querySelector('#card-library-content');
  let switchButton = document.querySelector('#switch-cards');

  if (window.getComputedStyle(collectionView, null).display === "none") {
    collectionView.style.display = 'block';
    newCards.style.display = 'none';
    switchButton.innerHTML = "See all your pulls"
  } else {
    collectionView.style.display = 'none';
    newCards.style.display = 'flex';
    switchButton.innerHTML = "See your collection"

  }
}

/**
 * Switch the layout view for the user based on what was selected.
 * @return {string} currentMode
*/
function switchLayoutMode(layout, currentMode) {
  if (layout === 'regular') {
    if (currentMode === 'day') {
      setNightMode();
      currentMode = 'night';
    } else {
      setDayMode();
      currentMode = 'day';
    }
  } else if (layout === 'spacejam') {
    if (currentMode === 'spacejam') {
      setNightMode();
      currentMode = 'night';
    } else {
      setSpacejamMode();
      currentMode = 'spacejam';
    }
  } else {
    setDayMode();
    currentMode = 'day';
    let messageCenter = document.querySelector(".message-center");
    messageCenter.innerHTML = "Something went wrong, ribbit.";
  }

  return currentMode;
}

function setDayMode () {
  //set the buttons
  document.querySelector('#regular-mode').innerHTML = 'Dark Mode';
  document.querySelector('#spacejam-mode').innerHTML = 'Let\'s get crazy';

  document.querySelector('.spacejam').style.display="none";
  document.querySelector('.message-center').style.display='block';
  document.querySelector('.machine').classList="machine";

  //reset the colors
  document.body.style.background = "";
  document.querySelector('#card-library-container').style.background = '';
  document.querySelector('.message-center').style.background = '';
  document.querySelector('#regular-mode').style.background="";
  document.querySelector('#spacejam-mode').style.background="";
  // document.querySelector('#clearStorage').style.background="";
  // document.querySelector('#clearStorage').style.color="";
  document.querySelector('#switch-cards').style.background="";
  document.querySelector('#switch-cards').style.color="";
  document.querySelector('.message-center').style.color='';

  document.querySelector('.message-center').innerHTML = "Feels a little bright. <br /> " + welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

}

function setNightMode () {
  //set the buttons
  document.querySelector('#regular-mode').innerHTML = 'Light Mode';
  document.querySelector('#spacejam-mode').innerHTML = 'Let\'s get crazy';

  //styles
  document.body.style.background = "#30adb3";
  document.querySelector('#card-library-container').style.background = '#157e91';
  document.querySelector('.message-center').style.background = '#c0c9b9';
  document.querySelector('.spacejam').style.display="none";
  document.querySelector('.message-center').style.display='block';
  document.querySelector('.machine').classList="machine";
  // document.querySelector('#clearStorage').style.background="#75ccab";
  // document.querySelector('#clearStorage').style.color="#237e75";
  document.querySelector('#switch-cards').style.background="#75ccab";
  document.querySelector('#switch-cards').style.color="#237e75";
  document.querySelector('.message-center').style.color='#000';

  //resets
  document.querySelector('#regular-mode').style.background="";
  document.querySelector('#spacejam-mode').style.background="";

  document.querySelector('.message-center').innerHTML = "Is it dark in here, or is that just me? Ribbit. <br /> " + welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
}

function setSpacejamMode () {
  //set the buttons
  document.querySelector('#regular-mode').innerHTML = 'Light Mode';
  document.querySelector('#spacejam-mode').innerHTML = 'Night Mode';

  //styles
  document.body.style.backgroundImage="#b25ed8";
  document.body.style.backgroundImage = "url('images/spacejambg.png')";
  document.querySelector('#card-library-container').style.background='transparent';
  document.querySelector('.message-center').style.display='none';
  document.querySelector('.spacejam').style.display="block";
  document.querySelector('.machine').classList="machine spinchine";
  document.querySelector('#regular-mode').style.background="#efd284";
  document.querySelector('#spacejam-mode').style.background="#ed6fd8";
}

