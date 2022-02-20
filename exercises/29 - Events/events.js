const buybuttons = document.querySelector('.buttonProducer');
let i = 1;

function handleClick() {
  const newButton = document.createElement('button');
  newButton.classList.add('newButtons');
  newButton.textContent = `I'm Button number ${i}`;
  document.querySelector('h2').insertAdjacentElement('beforeend', newButton);
  newButton.addEventListener('click', (event) => {
    event.target.remove();
  });
  i += 1;
}

buybuttons.addEventListener('click', handleClick);
