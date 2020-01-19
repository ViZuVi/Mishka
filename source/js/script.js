var openModalBtn = document.querySelector(".week-special__btn");
var addGoodBtn = document.querySelector(".good__basket-icon");
var searchModal = document.querySelector(".basket-modal");


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
