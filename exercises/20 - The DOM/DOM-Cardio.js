// Make a div
const d = document.createElement('div');
// add a class of wrapper to it
d.classList.add('wrapper');
// put it into the body
document.querySelector('body').appendChild(d);

// make an unordered list
const ulist = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const elOne = document.createElement('li');
const elTwo = document.createElement('li');
const elThree = document.createElement('li');
elOne.textContent = 'one';
elTwo.textContent = 'two';
elThree.textContent = 'three';
ulist.appendChild(elOne);
ulist.appendChild(elTwo);
ulist.appendChild(elThree);
// put that list into the above wrapper
document.querySelector('.wrapper').appendChild(ulist);
// create an image
const im = document.createElement('img');
// set the source to an image
im.src = 'https://picsum.photos/500';
// set the width to 250
im.width = 250;
// add a class of cute
im.classList.add('cute');
// add an alt of Cute Puppy
im.alt = 'cute puppy';
// Append that image to the wrapper
d.append(im);
// with HTML string, make a div, with two paragraphs inside of it

const myhtml =
  '<div class="myDiv"><p>Paragraph One</p><p>Paragraph Two</p></div>';

const ellist = document.querySelector('ul');
// put this div before the unordered list from above
ellist.insertAdjacentHTML('afterbegin', myhtml);
// add a class to the second paragraph called warning
const myDiv = d.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.children[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    </div>`;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsdiv = document.createElement('div');
cardsdiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);
// append those cards to the div
cardsdiv.innerHTML = cardsHTML;
document
  .querySelector('.wrapper')
  .insertAdjacentElement('beforebegin', cardsdiv);
// put the div into the DOM just before the wrapper element

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// document.querySelector('.cards').addEventListener('button', remove());
// select all the buttons!
// make out delete function
// loop over them and attach a listener
