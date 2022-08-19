function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();

  // display pin
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;

    const typedNumberField = document.getElementById("typed-number");
    const previousTypedNumber = typedNumberField.value;

    if (isNaN(number)) {
      if (number === "C") {
        typedNumberField.value = "";
      } else if (number === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigit = digits.join("");
        typedNumberField.value = remainingDigit;
      }
    } else {
      const newTypedNumber = previousTypedNumber + number;
      typedNumberField.value = newTypedNumber;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const displayPin = (displayPinField.value);

  const typedNumberField = document.getElementById("typed-number");
  const typedNumer = (typedNumberField.value);


  const pinSuccessMessage = document.getElementById('pin-success');
  const pinFailureMessage = document.getElementById('pin-failure');


  if(displayPin === typedNumer){
    pinSuccessMessage.style.display = 'block';
    pinFailureMessage.style.display = 'none';

  }
  else{
    pinFailureMessage.style.display = 'block';
    pinSuccessMessage.style.display = 'none';

  }
});



const category="pen"; 
const performer = category+"-teller"; 
console.log(performer)