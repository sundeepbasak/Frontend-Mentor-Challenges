const adviceIndex = document.getElementById("adviceIndex");
const advice = document.getElementById("advice");

const dice = document.getElementById("dice");
dice.addEventListener("click", getAdvice);

function getAdvice(e) {
  //console.log("advice");
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      adviceIndex.innerText = `Advice #${data.slip.id}`;
      advice.innerText = `${data.slip.advice}`;
    });
}
