/**
 * rodentLibrary.js contains all code pertaining
 * to saving rodents on a user's local machine.
 * Please read docs on local storage before editing
 * this file.
 * Important localStorage notes:
    * It is a synchronous operation.
    * Do not store any secure data.
    * Stored on the browser.

 * @author Kredgons, do not use without permission. also Crobats was here
 *
 * @TODO a more elegant way of handling rarities?
    * note: could just loop over each
*/

var totalRodents = 0;
const rodentsInGame = Object.keys(RODENT_CARDS.common).length + Object.keys(RODENT_CARDS.uncommon).length +  Object.keys(RODENT_CARDS.rare).length;

/**
 * Build the library when the page loads if user has been here before.
 *
 * @return {boolean} false if user has never been to rodentpon
*/
function buildLibraryOnload() {
  if (localStorage.getItem("visitedBefore") === null) {
    localStorage.setItem("visitedBefore", true);
    return false;
  }

  Object.keys(localStorage).forEach((key) => {
    let rodent = getRodent(key);
    if (rodent !== -1) {
      addToLibrary(key, rodent);
    }
  });
}

/**
 * Save the newfound rodent to the user's local storage.
 * We assume rodent does is new based on the call to this function.
 *
 * @param {object} rodent The rodent to store.
 * @return {boolean} Status of adding.
*/
function saveToLibrary(rodent, rodentName) {
  if (!rodent || !rodentName) return -1;
  window.localStorage.setItem(rodentName, rodentName);
  addToLibrary(rodentName, rodent);
}

/**
 * Add the rodent to the HTML library.
 * @param {object} rodent The rodent to be added to the library.
 * @return {void}
*/
function addToLibrary(rodentKey, rodent) {
  let rodentCard = document.createElement("div");
  rodentCard.className = 'card slide-card';
  rodentCard.innerHTML = "<img src='"+ rodent.image +"' alt='Card for " + rodent.name + ". Description states, "+ rodent.description +"' tabindex='0' / >";
  document.getElementById('saved-cards').appendChild(rodentCard);

  rodentCard.onclick = function() {
      artistCreditsModal(rodentKey);
  }
  updateTotalRodents();
}

/**
 * Check if a rodent exists in the library already.
 *
 * @param {object} rodent The rodent to be checked.
 * @return {boolean} false if it doesn't exist
*/
function rodentExists(rodentName) {
  let exists = false;
  Object.keys(window.localStorage).forEach((key) => {
    let currRodent = window.localStorage.getItem(key);
    if ( currRodent === rodentName ) {
      exists = true;
    }
  });

  return exists;
}

/**
 * Retrieve rodent object.
 *
 * @param {string} rodentName the name to match.
 * @return {object}
*/
function getRodent(rodentKey) {
  if (cards.common[rodentKey]) return cards.common[rodentKey];
  else if (cards.uncommon[rodentKey]) return cards.uncommon[rodentKey];
  else if (cards.rare[rodentKey]) return cards.rare[rodentKey];
  else return -1; //rodent was not found

}

/**
 * Get total number rodents found.
 *
 * @param {string} rodentName the name to match.
 * @return {object}
*/
function updateTotalRodents() {
  let totalRodentEl = document.querySelector('#total-rodents');

  totalRodents++;
  totalRodentEl.innerHTML = totalRodents + " / " + rodentsInGame;
}
