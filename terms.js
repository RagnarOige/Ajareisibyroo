const acceptButton = document.getElementById("accept-button");
const declineButton = document.getElementById("decline-button");
const message = document.getElementById("terms-message");

acceptButton.addEventListener("click", function () {
  message.textContent = "Aitäh! Oled tingimustega nõustunud.";
  setTimeout(function () {
    window.location.href = "front-page.html";
  }, 1500);
});

declineButton.addEventListener("click", function () {
  message.textContent = "Ilma tingimustega nõustumata ei saa sa jätkata.";
});
