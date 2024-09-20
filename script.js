// Hamburger
const hamburger = document.querySelector(".hamburger");
const fullbar = document.querySelector(".fullbar");
const header = document.getElementById("header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  fullbar.classList.toggle("active1");
  header.classList.toggle("fixer");
});

// PreLoader
let loadr = document.getElementById("loadr");
window.addEventListener("load", function () {
  loadr.style.display = "none";
});

// Siderbar Hoverer
document.addEventListener("DOMContentLoaded", () => {
  const hoverElements = document.querySelectorAll(".hover-element");
  hoverElements.forEach((element) => {
    const targetId = element.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    var showElement = () => {
      targetElement.style.display = "block";
    };

    var hideElement = () => {
      targetElement.style.display = "none";
    };

    element.addEventListener("mouseover", showElement);
    element.addEventListener("mouseout", hideElement);
    targetElement.addEventListener("mouseover", showElement);
    targetElement.addEventListener("mouseout", hideElement);
  });
});

// Siderbar Hoverer - Mobile version
let index = 10;
const hoverElements2 = document.querySelectorAll(".hover-element2");
hoverElements2.forEach((element) => {
  const targetId = element.getAttribute("data-target");
  const targetElement = document.getElementById(targetId);

  const showElement = () => {
    targetElement.style.zIndex = index;
    index = index + 1;
    targetElement.style.display = "block";
  };

  const hideElement = () => {
    targetElement.style.display = "none";
    targetElement.style.zIndex = "0";
  };

  element.addEventListener("click", showElement);
  hamburger.addEventListener("click", hideElement);
});
