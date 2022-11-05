// Understanding forEach for old IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// squareSwitch
// const square1 = document.querySelector(".slider-square1");
// const square2 = document.querySelector(".slider-square2");
// const square3 = document.querySelector(".slider-square3");
// const square4 = document.querySelector(".slider-square4");

// const squareSwitcher = (count) => {
//   if (count === 0) {
//     square2.classList.remove("active-square");
//     square3.classList.remove("active-square");
//     square4.classList.remove("active-square");
//     square1.classList.add("active-square");
//   } else if (count === 1) {
//     square1.classList.remove("active-square");
//     square3.classList.remove("active-square");
//     square4.classList.remove("active-square");
//     square2.classList.add("active-square");
//   } else if (count === 2) {
//     square1.classList.remove("active-square");
//     square2.classList.remove("active-square");
//     square4.classList.remove("active-square");
//     square3.classList.add("active-square");
//   } else if (count === 3) {
//     square1.classList.remove("active-square");
//     square2.classList.remove("active-square");
//     square3.classList.remove("active-square");
//     square4.classList.add("active-square");
//   }
// };

// Slider

const dives = document.querySelectorAll(".slider .slider-line div");
const sliderLine = document.querySelector(".slider .slider-line");
let count = 0;
let width;

function init() {
  console.log("resize");
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * dives.length + "px";
  dives.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

init();
window.addEventListener("resize", init);

document.querySelector(".slider-next").addEventListener("click", function () {
  const countInc = count++;
  if (count >= dives.length) {
    count = 0;
  }
  rollSlider(countInc);
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  const countDec = count--;
  if (count < 0) {
    count = dives.length - 1;
  }
  rollSlider(countDec);
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

// Sort option

document.querySelectorAll(".dropdown").forEach((dropdownWrapper) => {
  const dropDownButton = dropdownWrapper.querySelector(".dropdownBtn");
  const dropDownList = dropdownWrapper.querySelector(".dropDownList");
  const dropDownListItem = dropDownList.querySelectorAll(".dropDownListItem");
  const dropDownInput = dropdownWrapper.querySelector(".inputForDrop");

  dropDownButton.addEventListener("click", function () {
    dropDownList.classList.toggle("dropDownList--visible");
  });

  dropDownListItem.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownButton.innerText = this.innerText;
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove("dropDownList--visible");
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target !== dropDownButton) {
      dropDownList.classList.remove("dropDownList--visible");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownList.classList.remove("dropDownList--visible");
    }
  });
});

// Choose favor

const favor = document.querySelectorAll(".favor").forEach((favor) => {
  favor.addEventListener("click", () => {
    favor.classList.toggle("favor--visible");
  });
});

// IncrImage

// const incrImage = "incrImage";
// const incrImageVis = "incrImage--visible";

// const incrSize = document.querySelectorAll(".incrSize").forEach((incrSize) => {
//   incrSize.addEventListener("click", () => {
//     incrImage.classList.toggle("incrImage--visible");
//     });
//   });
// });

// HbMenu

const HbMenu = document.querySelector(".hbMenu");
const HbMenuActivator = document.querySelector(".col-6");

const HbMenuActive = HbMenu.addEventListener("click", () => {
  HbMenuActivator.classList.toggle("active");
  HbMenu.classList.toggle("active");
});

// SearchBtn

const searchBtn = document.querySelector(".searchBtn");
const headerSearch = document.querySelector(".header-search");

searchBtn.addEventListener("click", () => {
  headerSearch.classList.toggle("active-search");
});
