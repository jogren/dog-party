var nameButton = document.querySelector('.name-button');

nameButton.addEventListener('click', changeName)

function changeName() {
  event.preventDefault();
  var newValue = document.querySelector('.text-box').value;
  document.querySelector('.some-dogs').innerText = newValue;
}