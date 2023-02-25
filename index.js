const result = document.querySelector(".res");

let flag_1 = false;
let flag_2 = false;
let random_num_1 = 0;
let random_num_2 = 0;

const img_1 = document.querySelector(".img1");
const img_2 = document.querySelector(".img2");

function whoWins() {
  // console.log(random_num_1);
  // console.log(random_num_2);
  if (flag_1 && flag_2) {
    if (Number(random_num_1) > Number(random_num_2)) {
      // console.log(random_num_1);
      result.textContent = "Player 1 wins!";

      setTimeout(function () {
        result.textContent = "Reset it bruh!";
      }, 1500);

      return;
    } else if (Number(random_num_1) < Number(random_num_2)) {
      result.textContent = "Player 2 wins!";

      setTimeout(function () {
        result.textContent = "Reset it bruh!";
      }, 1500);

      return;
    } else if (Number(random_num_1) === Number(random_num_2)) {
      result.textContent = "its a draw!";

      setTimeout(function () {
        result.textContent = "Reset it bruh!";
      }, 1500);

      return;
    }
  } else {
    result.textContent = "Now You !";
    return;
  }
}
const btn_reset = document.querySelector(".btn_reset");


btn_reset.addEventListener("click", () => {
  img_1.setAttribute("src", "images/dice1.png");
  img_2.setAttribute("src", "images/dice1.png");
  flag_1 = false;
  flag_2 = false;
  random_num_1 = 0;
  random_num_2 = 0;

  result.textContent = "Roll it again! bruh!";
});

const btn_1 = document.querySelector(".btn1");

const btn_2 = document.querySelector(".btn2");

btn_1.addEventListener("mouseup", () => {
  img_1.classList.remove("shake");
});

btn_1.addEventListener("mousedown", () => {
  img_1.classList.add("shake");
});

btn_2.addEventListener("mouseup", () => {
  img_2.classList.remove("shake");
});

btn_2.addEventListener("mousedown", () => {
  img_2.classList.add("shake");
});

btn_reset.addEventListener("mouseup", () => {
  img_1.classList.remove("shake");
  img_2.classList.remove("shake");
});

btn_reset.addEventListener("mousedown", () => {
  img_1.classList.add("shake");
  img_2.classList.add("shake");
});

btn_1.addEventListener("click", (event) => {
  console.log("btn_1 clicked");

  //   result.textContent = "Player 1 wins!";
  flag_1 = true;
  random_num_1 = Math.floor(Math.random() * 6) + 1;
  console.log(random_num_1);

  switch (random_num_1) {
    case 1:
      img_1.setAttribute("src", "images/dice1.png");

      break;

    case 2:
      img_1.setAttribute("src", "images/dice2.png");
      break;

    case 3:
      img_1.setAttribute("src", "images/dice3.png");
      break;

    case 4:
      img_1.setAttribute("src", "images/dice4.png");
      break;

    case 5:
      img_1.setAttribute("src", "images/dice5.png");
      break;

    case 6:
      img_1.setAttribute("src", "images/dice6.png");
      break;

    default:
  }

  whoWins();
});



btn_2.addEventListener("click", (event) => {
  console.log("btn_2 clicked");
  //   result.textContent = "Player 2 wins!";
  flag_2 = true;
  random_num_2 = Math.floor(Math.random() * 6) + 1;
  console.log(random_num_2);

  switch (random_num_2) {
    case 1:
      img_2.setAttribute("src", "images/dice1.png");
      break;

    case 2:
      img_2.setAttribute("src", "images/dice2.png");
      break;

    case 3:
      img_2.setAttribute("src", "images/dice3.png");
      break;

    case 4:
      img_2.setAttribute("src", "images/dice4.png");
      break;

    case 5:
      img_2.setAttribute("src", "images/dice5.png");
      img_2.classList.toggle("shake");
      break;

    case 6:
      img_2.setAttribute("src", "images/dice6.png");
      break;

    default:
  }

  whoWins();
});
