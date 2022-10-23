function getElementByElementId(elementId) {
  document.getElementById(elementId);
}

document.getElementById("generate-btn").addEventListener("click", function () {
  const outputPin = document.getElementById("output-pin");
  const randomPin = Math.random() * 9000 + 1;
  const randomPinInt = Math.floor(1000 + randomPin);
  outputPin.value = randomPinInt;
});
