const carousel = document.querySelector(".js-carousel");
const buttons = document.querySelectorAll(".js-btn");
firstItem = carousel.querySelectorAll("li")[0];

let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touched[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let firstItemWidth = firstItem.clientWidth + 20;
    carousel.scrollLeft +=
      button.id == "prev" ? -firstItemWidth : firstItemWidth;
  });
});
