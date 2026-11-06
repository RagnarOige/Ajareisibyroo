const acceptButton = document.getElementById("accept-button");
const declineButton = document.getElementById("decline-button");
const message = document.getElementById("terms-message");

function showGoodbye() {
  document.title = "Nägemist!";
  document.body.style.cssText =
    "background: #000; color: #fff; display: flex; align-items: center; " +
    "justify-content: center; min-height: 100vh; text-align: center; padding: 20px;";
  document.body.innerHTML =
    '<div>' +
      '<h1 style="font-size: 32px; margin-bottom: 16px;">Nägemist!</h1>' +
      '<p>Sa keeldusid tingimustest, nii et sait on nüüd suletud.</p>' +
      '<p>Sulge see vahekaart ise.</p>' +
    '</div>';

  for (let i = 0; i < 50; i++) {
    history.pushState(null, "", location.href);
  }

  window.addEventListener("popstate", function () {
    history.pushState(null, "", location.href);
  });
}

const navigationEntry = performance.getEntriesByType("navigation")[0];
const navigationType = navigationEntry ? navigationEntry.type : "navigate";

if (sessionStorage.getItem("declined") === "yes") {
  if (navigationType === "navigate") {
    sessionStorage.removeItem("declined");
  } else {
    showGoodbye();
  }
}

acceptButton.addEventListener("click", function () {
  message.textContent = "Aitäh! Oled tingimustega nõustunud.";
  setTimeout(function () {
    window.location.href = "front-page.html";
  }, 1500);
});

declineButton.addEventListener("click", function () {
  sessionStorage.setItem("declined", "yes");
  window.close();
  showGoodbye();
});