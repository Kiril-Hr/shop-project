// Understanding forEach for old IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

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
// cart
const productCount = document.querySelector("#product-count");
const btnToCart = document.querySelectorAll(".btnToCart");

btnToCart.forEach((item) => {
  item.addEventListener("click", () => {
    let numberOfCarts = +productCount.innerText;
    if (numberOfCarts < 9 && numberOfCarts <= 98) {
      productCount.innerText = numberOfCarts + 1;
    } else if (numberOfCarts >= 9 && numberOfCarts <= 98) {
      productCount.innerText = numberOfCarts + 1;
      productCount.style.left = "3.5px";
    } else {
      productCount.innerText = 99;
      productCount.style.left = "3.5px";
    }
  });
});
// modal-form
const moreDetails = document.querySelectorAll(".moreDetails");
const modalForm = document.querySelector(".modal-form");
const formModal = document.querySelector(".form-modal");
const formModalInputEmail = document.querySelector(".name");
const formModalInputName = document.querySelector(".email");
const modalCloseBtn = document.querySelector(".btn-close-modal");
const modalContainer = document.querySelector(".container-modal-form");
const modalContainerParagraph = document.querySelector(
  ".container-modal-form p"
);

moreDetails.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    modalForm.classList.add("active-modal");
  });
});

modalCloseBtn.addEventListener("click", () => {
  modalForm.classList.remove("active-modal");
});

document.addEventListener("click", (e) => {
  if (
    e.target !== modalContainer &&
    e.target !== formModal &&
    e.target !== formModalInputEmail &&
    e.target !== formModalInputName &&
    e.target !== modalContainerParagraph
  ) {
    modalForm.classList.remove("active-modal");
  }
});
const showModalAfterScroll = () => {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    modalForm.classList.add("active-modal");
  }
};
const removeModalAfterScrollAndClose = () => {
  if (
    !modalForm.classList.contains("active-modal") &&
    window.pageYOffset >= document.body.scrollHeight / 2
  ) {
    document.removeEventListener("scroll", showModalAfterScroll);
  }
};

document.addEventListener("scroll", showModalAfterScroll);

modalCloseBtn.addEventListener("click", removeModalAfterScrollAndClose);

document.addEventListener("click", removeModalAfterScrollAndClose);
// product-quantity

const productQty = document.querySelectorAll(".product-quantity");
let decrement = document.querySelectorAll(".decrement");
let increment = document.querySelectorAll(".increment");
let inputField = document.querySelectorAll(".product-quantity input");

// increment.forEach((item, i) => {
//   item.addEventListener("click", () => {
//     let currentValue = +inputField[i].value;
//     inputField[i].value = currentValue + 1;
//   });
// });

// decrement.forEach((item, i) => {
//   item.addEventListener("click", () => {
//     let currentValue = +inputField[i].value;
//     inputField[i].value = currentValue - 1;
//   });
// });

function Count(increment, decrement, inputField, minCount = 1, maxCount = 10) {
  this.domRefs = {
    increment,
    decrement,
    inputField,
  };
  this.toggleButtonState = () => {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrement.disabled = count <= minCount;
    this.domRefs.increment.disabled = count >= maxCount;
  };
  this.toggleButtonState();

  this.incrementFunc = () => {
    let currentCount = +this.domRefs.inputField.value;
    this.domRefs.inputField.value = currentCount + 1;
    this.toggleButtonState();
  };
  this.decrementFunc = () => {
    let currentCount = +this.domRefs.inputField.value;
    this.domRefs.inputField.value = currentCount - 1;
    this.toggleButtonState();
  };
  this.domRefs.increment.addEventListener(
    "click",
    this.incrementFunc.bind(this.domRefs)
  );
  this.domRefs.decrement.addEventListener(
    "click",
    this.decrementFunc.bind(this.domRefs)
  );
}

for (let i = 0; i < productQty.length; i++) {
  const count = new Count(increment[i], decrement[i], inputField[i]);
}
