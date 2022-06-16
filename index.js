const btn = document.getElementById('increase-btn');
const btn1 = document.getElementById('reset-btn');
const btn2 = document.getElementById('decrease-btn');
const span = document.getElementById('count');
let count = 0;

btn.addEventListener("click", () => {
count += 1;
span.innerHTML = count;
} )

btn1.addEventListener("click", () => {
count = 0;
span.innerHTML = count;
} )

btn2.addEventListener("click", () => {
count -= 1;
span.innerHTML = count;
} )