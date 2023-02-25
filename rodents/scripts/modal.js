/**
 * animation.js contains all code pertaining
 * to the modals.

 * @author Kredgons, do not use without permission.
*/

const allArtists = artists;

/**
 * Opens when user clicks on a card to see its information.
 * @param {integer} rodentKey to find the rodent with
 * @return {void}
*/
function artistCreditsModal(rodentKey) {
  if (!rodentKey || rodentKey === undefined) return -1;
  openModal();
  buildCardModalBase(getRodent(rodentKey));
}

// /**
//  * Opens when a new card is pulled.
//  * @param {Object} rodent
//  * @return {void}
// */
// function newCardModal(rodent) {
//   let header = document.querySelector('.new-card-header');
//   let text = document.querySelector('.under-image-text');
//
//   header.style.display = "block";
//   text.style.display = "block";
//   header.innerHTML = "NEW RODENT ALERT!";
//   text.innerHTML = rodent.name + " has been added to your collection."
//
//   openModal();
//   buildCardModalBase(rodent);
// }

/**
 * A function for opening the modal.
 * Closing the modal code is also in this function.
 * @return {void}
*/
function openModal() {
  openModalAnimation();

  let modal = document.querySelector(".modal");
  let close = document.getElementsByClassName("close")[0];
  let image = document.querySelector('.rodent-image');
  let artist = document.querySelector('.rodent-artist');


  modal.style.display = "block";

  close.onclick = function() {
   closeModal();
  }

  window.onclick = function(e) {
   if (e.target == modal) {
     closeModal();
   }
  }
}

/**
 * Opens when user clicks "Support" in "Support our artistCreditsModal".
 * @return {void}
*/
function buildArtistModal() {
  let artistEl = document.querySelector('.list-artists');
  let modal = document.querySelector(".modal-content");
  modal.style.width="80%";

  let link = '';
  for (let artist in allArtists) {
    let link = document.createElement('div');
    link.innerHTML = "<a href='https://twitter.com/"+allArtists[artist]+"' target='_blank'>@" + allArtists[artist] + "</a>"
    artistEl.append(link);
  }
}

/**
 * Builds the base of displaying a card, which is the same
 * for finding a new card and checking a card's information.
 * @param {Object} rodent
 * @return {void}
*/
function buildCardModalBase(rodent) {
  let image = document.querySelector('.rodent-image');
  let artist = document.querySelector('.rodent-artist');
  if (rodent !== -1) {
    image.innerHTML = "<img src='"+ rodent.image +"' alt='Card for " + rodent.name + ". Description states, "+ rodent.description +"' tabindex='0' / >";
    artist.innerHTML = "<a href='https://twitter.com/"+rodent.artist+"' target='_blank'>@" + rodent.artist + "</a>";
  } else {
    image.innerHTML = "Card does not exist, whoops!<p>Try again, ribbit.</p>";
  }
}

function closeModal() {
  let modal = document.querySelector(".modal");
  let close = document.getElementsByClassName("close")[0];
  let image = document.querySelector('.rodent-image');
  let artist = document.querySelector('.rodent-artist');
  let artistEl = document.querySelector('.list-artists');

  modal.style.display = "none";
  document.querySelector('.modal-content').style.width = "";
  image.innerHTML = "";
  artist.innerHTML = "";
  artistEl.innerHTML = "";
}
