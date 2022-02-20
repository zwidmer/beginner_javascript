const item = document.querySelector('.items');
const width = 20;
const src = `https://source.unsplash.com/random/${width}`;
const myHtml = `
<div class ="wrapper">
<h1>HEy How are you</h1>
<h2>Cute Pup</h2>
<img src="${src}" alt="cute"/>

<div>`;
item.innerHTML = myHtml;

const myFragment = document.createRange().createContextualFragment(myHtml);
document.body.appendChild(myFragment);
