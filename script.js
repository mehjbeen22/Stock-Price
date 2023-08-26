//  Selecting All the Element.
let initialPrice = document.querySelector("#inital-price");
let stocksQuantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#current-price");
let checkButton = document.querySelector("#btn");
let showErrorMsg = document.querySelectorAll(".error-msg");
let outputEl = document.querySelector("#output");

//  Show Output function
const showOutput = (message, color) => {
  outputEl.innerText = message;
  outputEl.style.color = color;
};

//  Add Event listener to the button

checkButton.addEventListener("click", () => {
  const ip = Number(initialPrice.value);
  const qty = Number(stocksQuantity.value);
  const curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
});

//  For Calculating the Profit Loss and its Percentage

const calculateProfitAndLoss = (initial, quantity, current) => {
  //.............check that No feild is Empty .............//

  if (initial === "") {
    showErrorMsg[0].innerText = "Required value in Initial Price ";
  } else if (current === "") {
    showErrorMsg[2].innerText = "Required value in Current Price ";
  } else if (quantity === "") {
    showErrorMsg[1].innerText = "Required value in Quantity ";
  }

  //   ...................Calculation Logic .............//
  else {
    if (initial > current) {
      let loss = (initial - current) * quantity;
      let lossPercentage = (loss / initial) * 100;
      let fixlp = lossPercentage.toFixed(2);

      showOutput(
        `Hey ! The loss is ${loss} and the percentage is ${fixlp}%`,
        "#b91c1c"
      );
    } else if (current > initial) {
      let profit = (current - initial) * quantity;
      let profitPercentage = (profit / initial) * 100;
      let fixpp = profitPercentage.toFixed(2);

      showOutput(
        `Hey ! The Profit is ${profit} and the percentage is ${fixpp}%`,
        "#65a30d"
      );

      // Event Triggred
      const duration = 15 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        );
      }, 250);
    } else {
      showOutput("no Pain no Gain , no Gain no Pain", "#f97316");
    }
  }
};
