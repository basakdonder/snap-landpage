export default function () {
  const Menu = document.getElementById("hamburger-menu");
  const Slider = document.getElementById("nav");

  Menu.addEventListener("click", function () {
    Menu.classList.toggle("clicked");
    Slider.classList.toggle("active");
  });
}
