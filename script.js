let val = document.getElementById("value").textContent;
let num = parseInt(val);

function inc() {
  value.innerHTML = num++;
}
function dec() {
  if (num == 0) {
    alert("Cannot Decrement Below Zero");
  } else {
    value.innerHTML = num--;
  }
}
function clr() {
  value.innerHTML = 0;
}
