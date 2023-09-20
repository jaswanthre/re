// script.js

const mediaLink = document.querySelector("#media");
const investorsLink = document.querySelector("#investors");
const mediaPage = document.querySelector("#media-page");
const investorsPage = document.querySelector("#investors-page");

mediaLink.addEventListener("click", function() {
  mediaPage.classList.add("active");
  investorsPage.classList.remove("active");
});

investorsLink.addEventListener("click", function() {
  mediaPage.classList.remove("active");
  investorsPage.classList.add("active");

});

