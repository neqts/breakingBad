"use strict";
const btn = document.querySelector(".btn");
const charactersContainer = document.querySelector(".characters");

const renderCharacte = function (data) {
  const html = `
  <div class="show">
    <article class="character">
    <img class="character__img" src="${data.img}" />
    <div class="country__birthday">
      <h3 class="country__name">Name: ${data.name}</h3>
      <h4 class="country__status">Status: ${data.status}</h4>
      <p class="country__nickname"><span></span>Nickname: ${data.nickname}</p>
      <p class="country__portyed"><span></span>Portrayed: ${data.portrayed}</p>
    </div>
  </article>
  <div>
    `;

  charactersContainer.insertAdjacentHTML("beforeend", html);
  charactersContainer.style.opacity = 1;
};

const getCharacterData = function (character) {
  character = document.getElementById("fname").value;
  console.log("Character", character);
  fetch(`https://www.breakingbadapi.com/api/characters?name=${character}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCharacte(data[0]);
    });
  character.style.display = "none";
  show.style.display = "none";
};

btn.addEventListener(
  "click",
  getCharacterData(document.getElementById("fname").value)
);
