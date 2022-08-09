const VALUES = [
  { id: "scissors", value: "✌️" },
  { id: "rock", value: "👊" },
  { id: "paper", value: "✋" },
];
let i = 0;

const handleChange = () => {
  const computer = document.getElementById("computer");
  computer.textContent = VALUES[i].value;
  computer.dataset.id = VALUES[i].id;
  if (i === VALUES.length - 1) {
    i = 0;
  } else {
    i++;
  }
};
const interval = setInterval(handleChange, 100);

const compare = (user, computer) => {
  const indexUser = VALUES.findIndex((item) => item.id === user);
  const indexComputer = VALUES.findIndex((item) => item.id === computer);
  const check = indexUser - indexComputer;
  if ([1, -2].includes(check)) {
    return 1;
  } else if ([-1, 2].includes(check)) {
    return -1;
  } else {
    return 0;
  }
};

// user click
document.querySelectorAll(".user").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    clearInterval(interval);
    event.target.classList.add("active");
    const valueComputer = document.getElementById("computer").dataset.id;
    const valueUser = event.target.id;
    const result = compare(valueUser, valueComputer);

    const alert = document.createElement("div");
    alert.classList.add("alert", "text-center");
    let message = "";
    if (result === 1) {
      message = "bạn đã thắng!";
      alert.classList.add("alert-success");
    } else if (result === -1) {
      message = "bạn đã thua";
      alert.classList.add("alert-dark");
    } else {
      message = "bạn đã hòa";
      alert.classList.add("alert-warning");
    }
    alert.textContent = message;
    document.querySelector(".notification").appendChild(alert);
    document.getElementById("play-again").classList.remove("d-none");

    //prevent user click
    document.querySelectorAll(".user").forEach((_btn) => {
      _btn.style.pointerEvents = "none";
    });
  });
});
// play again
document.querySelector(".btn-play-again").addEventListener("click", () => {
  // computer start change

  const interval = setInterval(handleChange, 100);
  // user can click
  document.querySelectorAll(".user").forEach((_btn) => {
    _btn.style.pointerEvents = "";
  });
  // reset notification
  document.querySelector(".notification").innerHTML = "";
  //reset active btuton
  document.querySelector(".user.active").classList.remove("active");
  //hide play-again button
  document.getElementById("play-again").classList.add("d-none");
});
