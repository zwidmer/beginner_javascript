const unsortedList = document.createElement('ul');
['one', 'two', 'three', 'four', 'five'].forEach((ele) => {
  const el = document.createElement('li');
  el.textContent = ele;
  unsortedList.appendChild(el);
});
document.querySelector('body').appendChild(unsortedList);
