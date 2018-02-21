//variables and event listeners
const allButton = document.querySelector("#countAllButton");//button to count everything
const allResult = document.querySelector("#countAllResult");//display result
allButton.addEventListener("click", sumUpAll);

//number of items
const numberOfEnvelopes = document.querySelector("#noEnvelopes");
const numberOfLetters = document.querySelector("#noLetters");
const numberOfShirts = document.querySelector("#noShirts");
const numberOfFrisbee = document.querySelector("#noFrisbee");
const numberOfYoyo = document.querySelector("#noYoyo");

//event listeners - uses propagation
const envelopes = document.querySelector("#envelopes");
envelopes.addEventListener("click", countEnvelopes);
const letterhead = document.querySelector("#letterhead");
letterhead.addEventListener("click", countLetters);
const Tshirt = document.querySelector("#Tshirt");
Tshirt.addEventListener("click", countShirts);
const frisbee = document.querySelector("#frisbee");
frisbee.addEventListener("click", countFrisbee);
const yoyo = document.querySelector("#yoyo");
yoyo.addEventListener("click", countYoyo);

//there display results inside fieldsets
const envResult = document.querySelector("#envResult");
const envResultJustTaxes = document.querySelector("#envResultJustTax");
const lettResult = document.querySelector("#lettResult");
const lettResultJustTaxes = document.querySelector("#lettResultJustTax");
const shirtResult = document.querySelector("#shirtsResult");
const shirtResultJustTaxes = document.querySelector("#shirtsResultJustTax");
const frisbeeResult = document.querySelector("#frisbeeResult");
const frisbeeResultJustTaxes = document.querySelector("#frisbeeResultJustTax");
const yoyoResult = document.querySelector("#yoyoResult");
const yoyoResultJustTaxes = document.querySelector("#yoyoResultJustTax");

//separate functions for counting each element
//Envelope counting
function countEnvelopes() {
  let tax = document.querySelector("#envelopeTax"); //tax for this particular item
  let margin = document.querySelector("#envelopeMargin"); //margin for this particular item
  if (numberOfEnvelopes.value > 0) { //enable checkboxes if amount of items > 0
    tax.disabled = false;
    margin.disabled = false;
  } else if (numberOfEnvelopes.value < 0) { //warn not to enter negative number of items
    alert("Number of items can't be negative!");
    numberOfEnvelopes.value = 0; //force zero after entering negative number of items
  } else {
    tax.disabled = true; //and disable checkboxes untis item is chosen
    margin.disabled = true;
  }
  //check the number of items, tax and extra-margin
  let result = 520 * numberOfEnvelopes.value; // price * no of items
  if (tax.checked === false) {
    // if no tax exempt - add regular taxation => 0.07 of the price
    var result2 = result * 0.07;
  } else {
    var result2 = 0; //no taxes for some lucky items ;)
  }
  if (margin.checked === true) {
    //if additional margin wanted - add 0.16 of the price
    var result3 = result * 0.16;
  } else {
    //or just 0.11 as usual for regular margin
    var result3 = result * 0.11;
  }
  EnvFinal = result + result2 + result3; //sum up the costs for this item
  EnvFinal = Math.floor(EnvFinal * 100)/100;  //avoid weird float mistake in JavaScript
  EnvJustTax = (result + result2).toFixed(2); //count cost after taxation
  envResultJustTaxes.innerHTML =
    "Price for envelopes after taxation: $" + EnvJustTax;
  envResult.innerHTML = "Total price for envelopes: $" + EnvFinal.toFixed(2); //give cost with taxation and margin
}
// letters
function countLetters() {
  let tax = document.querySelector("#letterTax");
  let margin = document.querySelector("#letterMargin");
  if (numberOfLetters.value > 0) {
    tax.disabled = false;
    margin.disabled = false;
  } else if (numberOfLetters.value < 0) {
    alert("Number of items can't be negative!");
    numberOfLetters.value = 0;
  } else {
    tax.disabled = true;
    margin.disabled = true;
  }
  let result = 1983.37 * numberOfLetters.value;
  if (tax.checked === false) {
    var result2 = result * 0.07;
  } else {
    var result2 = 0;
  }
  if (margin.checked === true) {
    var result3 = result * 0.16;
  } else {
    var result3 = result * 0.11;
  }
  lettFinal = result + result2 + result3;
  lettFinal = Math.floor(lettFinal * 100)/100;
  lettJustTax = (result + result2).toFixed(2);
  lettResultJustTaxes.innerHTML =
    "Price for letterheads after taxation: $" + lettJustTax;
  lettResult.innerHTML = "Price for letterheads: $" + lettFinal.toFixed(2);
}
//count T-shirts
function countShirts() {
  let tax = document.querySelector("#shirtTax");
  let margin = document.querySelector("#shirtMargin");
  if (numberOfShirts.value > 0) {
    tax.disabled = false;
    margin.disabled = false;
  } else if (numberOfShirts.value < 0) {
    alert("Number of items can't be negative!");
    numberOfShirts.value = 0;
  } else {
    tax.disabled = true;
    margin.disabled = true;
  }
  let result = 294.04 * numberOfShirts.value;
  if (tax.checked === false) {
    var result2 = result * 0.07;
  } else {
    var result2 = 0;
  }
  if (margin.checked === true) {
    var result3 = result * 0.16;
  } else {
    var result3 = result * 0.11;
  }
  shirtFinal = result + result2 + result3;
  shirtFinal = Math.floor(shirtFinal * 100)/100;
  shirtJustTax = (result + result2).toFixed(2);
  shirtResultJustTaxes.innerHTML =
    "Price for T-shirts after taxation: $" + shirtJustTax;
  shirtResult.innerHTML = "Total price for T-shirts: $" + shirtFinal.toFixed(2);
}
//count Frisbees
function countFrisbee() {
  let tax = document.querySelector("#frisbeeTax");
  let margin = document.querySelector("#frisbeeMargin");
  if (numberOfFrisbee.value > 0) {
    tax.disabled = false;
    margin.disabled = false;
  } else if (numberOfFrisbee.value < 0) {
    alert("Number of items can't be negative!");
    numberOfFrisbee.value = 0;
  } else {
    tax.disabled = true;
    margin.disabled = true;
  }
  let result = 19385.38 * numberOfFrisbee.value;
  if (tax.checked === false) {
    var result2 = result * 0.07;
  } else {
    var result2 = 0;
  }
  if (margin.checked === true) {
    var result3 = result * 0.16;
  } else {
    var result3 = result * 0.11;
  }
  frisbeeFinal = result + result2 + result3;
  frisbeeFinal = Math.floor(frisbeeFinal * 100)/100;
  frisbeeJustTax = (result + result2).toFixed(2);
  frisbeeResultJustTaxes.innerHTML =
    "Price for frisbees after taxation: $" + frisbeeJustTax;
  frisbeeResult.innerHTML = "Total price for frisbees: $" + frisbeeFinal.toFixed(2);
}
//count Yoyos
function countYoyo() {
  let tax = document.querySelector("#yoyoTax");
  let margin = document.querySelector("#yoyoMargin");
  if (numberOfYoyo.value > 0) {
    tax.disabled = false;
    margin.disabled = false;
  } else if (numberOfYoyo.value < 0) {
    alert("Number of items can't be negative!");
    numberOfYoyo.value = 0;
  } else {
    tax.disabled = true;
    margin.disabled = true;
  }
  let result = 1829 * numberOfYoyo.value;
  if (tax.checked === false) {
    var result2 = result * 0.07;
  } else {
    var result2 = 0;
  }
  if (margin.checked === true) {
    var result3 = result * 0.16;
  } else {
    var result3 = result * 0.11;
  }
  yoyoFinal = result + result2 + result3;
  yoyoFinal = Math.floor(yoyoFinal * 100)/100;
  yoyoJustTax = (result + result2).toFixed(2);
  yoyoResultJustTaxes.innerHTML =
    "Price for frisbees after taxation: $" + yoyoJustTax;
  yoyoResult.innerHTML = "Total price for frisbees: $" + yoyoFinal.toFixed(2);
}
//Sum all function
function sumUpAll() { /* All these functions are called for final evaluation to make sure none of the final prices returns undefined */
  countEnvelopes();
  countLetters();
  countShirts();
  countFrisbee();
  countYoyo();
  let number = EnvFinal + lettFinal + shirtFinal + frisbeeFinal + yoyoFinal;
  number = Math.floor(number * 100) / 100;
  number = number.toFixed(2);
  allResult.innerHTML = "Total expenses: $" + number;
}
