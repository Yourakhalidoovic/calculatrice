const resulElement = document.querySelector(".risulte");

console.log(resulElement);
let result = 0;
// update the result element with the content of the resultt variables
resulElement.textContent = result;

// update the result element  with he content of the result
resulElement.textContent = result;
//addan event listenner to each butoon
const allButtons = document.querySelectorAll(".button-number");
for (let i = 0; i < allButtons.length; i++) {
  const button = allButtons[i];
  button.addEventListener("click", function () {
    result += button.textContent;
    resulElement.textContent = result;
  });
}
document.querySelector("#reset").addEventListener("click", function () {
  result = 0;
  resulElement.textContent = result;
});
document.querySelector("#del").addEventListener("click", function () {
  result = result.slice(0, -1);
  resulElement.textContent = result;
});

// const switchToggle = document.querySelector(".switch > input");

// switchToggle.addEventListener("change", function () {
//   if (switchToggle.checked === true) {
//     document.body.style.backgroundColor = "red";
//   } else {
//     document.body.style.backgroundColor = "orange";
//   }
// });

const switchToggle = document.querySelector(".switch > input ");
switchToggle.addEventListener("change", function () {
  if (switchToggle.checked === false) {
    resulElement.classList.add("light");
  } else {
    resulElement.classList.remove("light");
  }
});
