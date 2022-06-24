// image active
const activeEl = document.getElementById("active");
const imgEl = document.querySelectorAll(".img_list img");
// console.log(imgEl);
const opacity = 0.4;

imgEl[0].style.opacity = opacity;

imgEl.forEach((img) => img.addEventListener("click", imgclick));

function imgclick(e) {
  imgEl.forEach((imgall) => (imgall.style.opacity = 1));

  activeEl.src = e.target.src;

  activeEl.classList.add("fade-in");

  setTimeout(() => activeEl.classList.remove("fade-in"), 500);

  e.target.style.opacity = opacity;
}

//item add
const plusBtn = document.querySelector(".fa-plus");
const minusBtn = document.querySelector(".fa-minus");
const widthEl = document.querySelector(".width_kg");
const priceEl = document.querySelector(".price_item");
const cartEl = document.querySelector(".cart_item");
let count = 0;
let rate = 0;
let cart = 0;

plusBtn.addEventListener("click", () => {
  if (count < 10) {
    count++;
    cart++;
    rate += 250;
    count = count < 10 ? "" + count : count;
    widthEl.innerHTML = count + "kg";
    rate = rate * 1;
    priceEl.innerHTML = "$ " + rate + ".00";
    cartEl.innerHTML = cart;
  }
  console.log(rate);
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    cart--;
    rate -= 250;
    count = count < 10 ? "" + count : count;
    widthEl.innerHTML = count + "kg";
    rate = rate * 1;
    priceEl.innerHTML = "$ " + rate + ".00";
    cartEl.innerHTML = cart;
  }
});

const buyEL = document.querySelector(".buy");
const closeEl = document.querySelector(".close");
const modelEl = document.querySelector(".model");

buyEL.addEventListener("click", () => {
  modelEl.classList.add("model_add");
});

closeEl.addEventListener("click", () => {
  modelEl.classList.remove("model_add");
});

// active
const btnActiveEl = document.querySelectorAll(".btn_category");
// console.log(btnActiveEl);

btnActiveEl.forEach((active, index) => {
  active.addEventListener("click", () => {
    btnActiveEl.forEach((active) => {
      active.classList.remove("active_category");
    });
    btnActiveEl[index].classList.add("active_category");
  });
});
