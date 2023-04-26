const page = document.querySelector(".page");
const btnNode = document.querySelector(".burger__btn");
const burger = document.querySelector(".burger");
const burgerNav = document.querySelector(".burger__nav");

btnNode.addEventListener("click", function () {
  burger.classList.toggle("burger_active");
  page.classList.toggle("page_lock");
  btnNode.classList.toggle("burger__btn_active");
});

document.querySelectorAll(".burger__link").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("burger_active");
    page.classList.remove("page_lock");
    btnNode.classList.remove("burger__btn_active");
  })
);

burger.addEventListener("click", (event) => {
  const isClickOutsideContent = !event.composedPath().includes(burgerNav);

  if (isClickOutsideContent) {
    burger.classList.toggle("burger_active");
    page.classList.toggle("page_lock");
    btnNode.classList.toggle("burger__btn_active");
  }
});
