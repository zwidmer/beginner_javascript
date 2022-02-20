const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({ name: `${first} , ${last}`, age: 0 });

// IIFE
(function (age) {
  console.log('running');
  return `you are cool${age}`;
})(40);

// methods
const wes = {
  name: 'wes bos',
  sayHi() {
    console.log('Hi');
    return 'hey wes';
  },
  yellHi() {
    console.log('HEEY');
  },
  wisperHi: () => {
    console.log('hiiwes');
  },
};

// callback functions
const button = document.querySelector('.clickMe');
console.log(button);
button.addEventListener('click', wes.yellHi);

function handleClick() {
  console.log('great clicking!!');
}
button.addEventListener('click', () => {
  console.log('nicejob');
});

setTimeout(wes.yellHi, 5000);
