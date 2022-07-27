const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const colorInput = document.getElementById("color-input");
const countryInput = document.getElementById("country-input");

const cardContainer = document.querySelector(".card");

const cardTitle = document.querySelector(".card-title");
const cardSubtitle = document.querySelector(".years");
const cardSubtitles = document.querySelector(".state");
const genderTitle = document.querySelector(".gender");

const maleInput = document.getElementById("male-input");
const femaleInput = document.getElementById("female-input");

let chosenGender;

function renderCard(name, age, country, gender) {
  return (
    `<div class="card" style="width: 18rem; background-color: lightblue">
<div class="card-body">
  <h5 class="card-title">` +
    name +
    ` </h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">` +
    age +
    ` age</li>
  <li class="list-group-item">` +
    country +
    `</li>
    <li class="list-group-item">` +
    gender +
    `</li>
  
</ul>
</div>   `
  );
}

function handleButton() {
  const cardHtml = renderCard(
    nameInput.value,
    ageInput.value,
    countryInput.value,
    genderValue()
  );
  cardContainer.innerHTML += cardHtml;

  cardContainer.style.backgroundColor = colorInput.value;
}

function handleReset() {
  nameInput.value = "";
  ageInput.value = "";
  colorInput.value = "#000";
  countryInput.value = "";
}

function genderValue() {
  if (maleInput.checked === true) {
    chosenGender = "male";
  } else if (femaleInput.checked === true) {
    chosenGender = "female";
  }
  return chosenGender;
}

genderValue();
