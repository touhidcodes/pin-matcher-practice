// Common Function
function getElementByElementId(elementId) {
  document.getElementById(elementId);
}

// Generate Pin Function
function generatePin(elementId) {
  const outputPin = document.getElementById(elementId);
  const randomPin = Math.random() * 9000 + 1;
  const randomPinInt = Math.floor(1000 + randomPin);
  outputPin.value = randomPinInt;
  return randomPin;
}

// Generate Pin
document.getElementById("generate-btn").addEventListener("click", function () {
  generatePin("output-pin");
});
