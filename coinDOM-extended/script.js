const form = document.getElementById("money-form");
const coinsArea = document.getElementById("coins-area");
// listen for the form submit
form.addEventListener("submit", (e) => {
  // stop the form from reloading the page
  e.preventDefault();
  // collect the user entries from the form
  let data = new FormData(form);
  // the input with name="count" is the number of coins
  let coinCount = parseInt(data.get("count"));

  // loop to create the right number of coins
  for (let i = 0; i < coinCount; i++) {
    let coin = document.createElement("div");
    coin.classList.add("coin");
    // the input with name="coin" is the text of the coin
    coin.innerText = data.get("coin") + i;
    // append each coin to the coins area div
    coinsArea.append(coin);
  }
});
let deleteCoin = document.querySelector("#coins-area");
deleteCoin.addEventListener("click", function (e) {
  e.target.remove();
});
