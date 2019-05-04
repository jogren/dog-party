// NAME DOG FUNCTION

var nameButton = document.querySelector('.name-button');

nameButton.addEventListener('click', changeName)

function changeName() {
  event.preventDefault();
  var newValue = document.querySelector('.text-box').value;
  document.querySelector('.some-dogs').innerText = newValue;
}

// HIDE PARAGRAPH FUNCTIONS

function hideContent1() {
  var x = document.getElementById("how-paragraph");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function hideContent2() {
  var x = document.getElementById("what-paragraph");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function hideContent3() {
  var x = document.getElementById("facts-paragraph");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}