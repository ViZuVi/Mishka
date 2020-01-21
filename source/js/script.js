var openModalBtn = document.querySelector(".week-special__btn");
var addGoodBtn = document.querySelector(".good__basket-icon");
var searchModal = document.querySelector(".basket-modal");
var closeModalBtn = searchModal.querySelector(".button--add");


if (openModalBtn) {
  openModalBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchModal.classList.add("basket-modal--show");
  });
}

if (addGoodBtn) {
  addGoodBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchModal.classList.add("basket-modal--show");
  });
}


closeModalBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchModal.classList.remove("basket-modal--show");
  searchModal.classList.add("basket-modal");
})
