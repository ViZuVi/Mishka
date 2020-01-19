var openModalBtn = document.querySelector(".week-special__btn");
var addGoodBtn = document.querySelector(".good__basket-icon");
var searchModal = document.querySelector(".modal-search");



openModalBtn.addEventListener("click", function (evt) {

  searchModal.classList.remove("visually-hidden");
  searchModal.classList.add("basket-modal__shown");
});

addGoodBtn.addEventListener("click", function (evt) {

  searchModal.classList.remove("visually-hidden");
  searchModal.classList.add("basket-modal__shown");
});
