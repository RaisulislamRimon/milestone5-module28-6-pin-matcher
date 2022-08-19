function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    // console.log("pin not found");
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  //   display pin
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById("type-numbers");
    const previousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
      // console.log(number);
      if (number === "C") {
        typeNumberField.value = "";
      } else if (number === "<") {
        // typeNumberField.value = typeNumberField.value.slice(0, -1);
        const digits = previousTypeNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typeNumberField.value = remainingDigits;
      }
    } else {
      const newTypeNumber = previousTypeNumber + number;
      typeNumberField.value = newTypeNumber;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;
  const typeNumberField = document.getElementById("type-numbers");
  const typeNumber = typeNumberField.value;
  const pinSuccessMsg = document.getElementById("pin-success");
  const pinFailureMsg = document.getElementById("pin-failure");
  if (currentPin === typeNumber) {
    pinSuccessMsg.style.display = "block";
    pinFailureMsg.style.display = "none";
  } else {
    pinFailureMsg.style.display = "block";
    pinSuccessMsg.style.display = "none";
  }
});
