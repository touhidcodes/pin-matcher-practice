// // Common Functions
// function getElementByElementId(elementId) {
//   document.getElementById(elementId);
// }

// function emptyString(elementId) {
//   const string = document.getElementById(elementId);
//   const emptyString = " ";
//   string.value = emptyString;
// }

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
});

// Clear Number
document.getElementById("clear").addEventListener("click", function () {
  const clearNumber = document.getElementById("input-pin");
  clearNumber.value = "";
});

// const inputValue = document.getElementById("input-pin").value;

// if (inputValue.length == "") {
//   alert("Number field can not be empty ");
// } else if (inputValue.length < 4) {
//   alert("Number can not be grater than 4");
// }
