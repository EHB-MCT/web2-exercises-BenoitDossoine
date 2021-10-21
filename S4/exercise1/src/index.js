import Cleave from "cleave.js";
require('cleave.js/dist/addons/cleave-phone.BE');


window.onload = function () {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    showCard();
  })
}

function showCard() {
  let nameInput = document.getElementById("inputName").value;
  let birthdateInput = document.getElementById("birthInput").value;
  let rrnInput = document.getElementById("rrnInput").value;
  let ageInput = document.getElementById("ageInput").value;
  let phoneInput = document.getElementById("phoneInput").value;

  document.getElementById("cardContainer").innerHTML = `
  <div class="col-md-6">
      <div class="h-100 p-5 text-white bg-dark rounded-3">
        <h2>${nameInput}</h2>
        <p>The subject ${nameInput}, born on ${birthdateInput} and aged ${ageInput}, was given number ${rrnInput}.</button>
        <button class="btn btn-outline-light" type="button">Call subject at ${phoneInput}</button>
        </div>
    </div>`;

}

const name = new Cleave('.student', {
  prefix: "STUDENT-"
});

const birthdate = new Cleave('.birthInput', {
  date: true,
  datePattern: ['d', 'm', 'Y']
})

const rijksregister = new Cleave('.rrn', {
  blocks: [2, 2, 2, 3, 2],
  delimiters: ['.', '.', '-', '.']
})

const age = new Cleave('.age', {
  numeral: true,
  numeralPositiveOnly: true
})

const phone = new Cleave('.phone', {
  phone: true,
  phoneRegionCode: 'BE'
});