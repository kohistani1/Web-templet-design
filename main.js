let width;
const showNav = document.querySelector("");

const showWidth = () => {
  width = this.innerWidth;
  console.log(width);
};
window.addEventListener("resize", showWidth);

if (width <= 600) {
}
