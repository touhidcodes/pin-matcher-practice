// // Common Functions
function displayBlock(elementId) {
  document.getElementById(elementId).style.display = "block";
}

function displayNone(elementId) {
  document.getElementById(elementId).style.display = "none";
}

// Generate Pin Function
function generatePin(elementId) {
  const outputPin = document.getElementById(elementId);
  const randomPin = Math.random() * 9000 + 1;
  const randomPinInt = Math.floor(1000 + randomPin);
  outputPin.value = randomPinInt;
  return randomPinInt;
}

// Generate Pin
document.getElementById("generate-btn").addEventListener("click", function () {
  generatePin("output-pin");
});

// Get input from btn function
function getInput(elementId) {
  document.getElementById(elementId).addEventListener("click", function () {
    clickInput(elementId);
  });
}

function clickInput(newValue) {
  const inputScreen = document.getElementById("input-pin");
  inputScreen.value += newValue;
}

// Get input from btn
getInput(1);
getInput(2);
getInput(3);
getInput(4);
getInput(5);
getInput(6);
getInput(7);
getInput(8);
getInput(9);
getInput(0);

// Delete Number
document.getElementById("delete").addEventListener("click", function () {
  const deleteNumber = document.getElementById("input-pin");
  deleteNumber.value = deleteNumber.value.slice(0, -1);

  displayNone("pin-true");
  displayNone("pin-false");
});

// Clear Number
document.getElementById("clear").addEventListener("click", function () {
  const clearNumber = document.getElementById("input-pin");
  clearNumber.value = "";

  displayNone("pin-true");
  displayNone("pin-false");
});

// Submit Action function
function pinMatcher() {
  const inputPin = document.getElementById("input-pin").value;
  const randomPin = document.getElementById("output-pin").value;

  if (randomPin == inputPin) {
    displayBlock("pin-true");
    displayNone("pin-false");
  } else {
    displayBlock("pin-false");
    displayNone("pin-true");
  }
}

// Submit Action
document.getElementById("submit-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("input-pin").value;

  if (inputValue == "") {
    alert("Number field can not be empty ");
  } else if (inputValue.length > 4) {
    alert("Number can not be grater than 4");
  }

  pinMatcher();
  tryCount();
});

//  Try Count function
function tryCount() {
  const count = document.getElementById("try-count").innerHTML;
  document.getElementById("try-count").innerHTML -= 1;

  if (count == "1") {
    disableBtn();
  }
}

function disableBtn() {
  const disableBtn = document.getElementById("submit-btn");
  disableBtn.style.cursor = "not-allowed";
  disableBtn.setAttribute("disabled", "true");
  disableBtn.style.title = "Please Reload Page Again";
}
