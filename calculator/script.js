//Display number after click
const buttons = document.querySelectorAll(".btn");
let arr = [];
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.textContent);
    arr.push(event.target.textContent);
  });
});

document.querySelector(".input").textContent = arr.toString();
console.log(arr.toString());
