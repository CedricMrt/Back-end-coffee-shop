
/* ######## main title animation ######### */

const main = {
  title: document.querySelector("#title"),
  presentationText: document.querySelector("#presentation"),
  coffeeImg: document.querySelector("#coffeeImg"),
  cataloglink: document.querySelector("#catalog__link"),

  init: function () {
    setTimeout(function () {
      main.title.classList.add("mainActive");
      main.coffeeImg.classList.add("mainActive");
    }, 700);

    setTimeout(function () {
      main.presentationText.classList.add("mainActive");
    }, 1000);

    setTimeout(function () {
      main.cataloglink.classList.add("mainActive");
    }, 1300);

  },
};
main.init();


