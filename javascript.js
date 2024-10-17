let trashBtns = document.getElementsByClassName("fa fa-trash");
let quantity = document.getElementsByTagName("input");
let prices = document.getElementsByTagName("h4");
for (let trashBtn of trashBtns) {
  trashBtn.addEventListener("click", function () {
    trashBtn.parentElement.parentElement.parentElement.remove();
  });
}
let sum = 0;
for (let quantitys of quantity) {
  quantitys.addEventListener("change", function (e) {
    // console.log(e.target.value);
    let total = document.getElementById("final-price");
    // for (let i = 0; i < prices.length; i++) {
    //   sum = sum + Number(e.target.value) * Number(prices[i].textContent);
    // }
    sum =
      sum +
      Number(e.target.value) *
        Number(quantitys.parentElement.previousElementSibling.textContent);
    console.log(sum);
    total.textContent = sum;
  });
}
// console.log(total);
