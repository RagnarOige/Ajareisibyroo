const packages = [
  {
    image: "IMG/Jurrasic.png",
    text: "Reis dinosauruste ajastusse – seiklus, mis ulatub miljonite aastate taha!",
    question: "Kas oled valmis reisima miljonite aastate taha?",
    url: "Reis dinosauruste ajastusse/dinozavri.index.html"
  },
  {
    image: "IMG/Medival.png",
    text: "Reis keskaega – sukeldu kuningate ja rüütlite ajastusse!",
    question: "Broneeri oma ajarännak juba täna!",
    url: "Reis keskaega – sukeldu kuningate ja rüütlite ajastusse!/keskAeg.index.html"
  },
  {
    image: "IMG/Future city.png",
    text: "Reis aastasse 2100 – avasta tulevikku!",
    question: "Kas oled valmis kohtuma tulevikuga?",
    url: "Reis aastasse 2100 – avasta tulevikku!/2100aasta.index.html"
  },
  {
    image: "IMG/Ancient.png",
    text: "Reis aastasse 30 pKr – rännak piibliaega!",
    question: "Broneeri oma ajarännak juba täna!",
    url: "Reis aastasse 30 pKr  rännak piibliaega!/ChristAeg.index.html"
  },
  {
    image: "IMG/Egypt.png",
    text: "Reis Vana-Egiptusesse – ekspeditsioon läbi aastatuhandete!",
    question: "Kas oled valmis avastama Vana-Egiptuse saladusi?",
    url: "Reis Vana-Egiptusesse/Egiptus.index.html"
  },
  {
    image: "IMG/Space elevator.png",
    text: "Meie reisibüroo kutsub sind unustamatule seiklusele aastasse 2060!",
    question: "Ära jää tulevikust maha – tule ja koge seda oma silmaga !",
    url: "Reis aastasse 2060 – avasta tuleviku maailma!/tulevik2060.index.html"
  }
];

const services = [
  {
    image: "IMG/Kings guard.png",
    text: "Kuninglik ihukaitsja",
    question: "Kuninglik ihukaitsja kaitseb sind võõraste ohtude eest!"
  },
  {
    image: "IMG/Memory wipe.png",
    text: "Mälukustutus masin",
    question: "Mälukustutus masin kustutab teiste inimeste mälu!"
  }
];

const servicePopupFrame = document.getElementById("service-popup-frame");

window.addEventListener("message", function (event) {
  if (
    event.source === servicePopupFrame.contentWindow &&
    event.origin === window.location.origin &&
    event.data?.type === "close-service-popup"
  ) {
    servicePopupFrame.hidden = true;
  }
});

function showCards(list, gridId, buttonText, message) {
  const grid = document.getElementById(gridId);

  list.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
      '<div class="card-image">' +
        '<img src="' + item.image + '" alt="">' +
      '</div>' +
      '<div class="card-text">' +
        '<p>' + item.text + '</p>' +
        '<p>' + item.question + '</p>' +
      '</div>' +
      '<button class="book-button">' + buttonText + '</button>';

    const button = card.querySelector(".book-button");
    button.addEventListener("click", function () {
      if (buttonText === "BRONEERI") {
        window.location.href = item.url;
      } else {
        servicePopupFrame.hidden = false;
      }
    });

    grid.appendChild(card);
  });
}

showCards(packages, "offers-grid", "BRONEERI", "Broneerid: ");
showCards(services, "services-grid", "TELLI", "Tellid: ");

const emailInput = document.getElementById("email-input");
const newsletterButton = document.getElementById("newsletter-button");

newsletterButton.addEventListener("click", function () {
  const email = emailInput.value;

  if (email === "") {
    alert("Palun sisesta oma e-posti aadress.");
  } else {
    alert("Aitäh! Liitusid uudiskirjaga: " + email);
    emailInput.value = "";
  }
});

const feedbacks = [
  {
    text: "Raskele ülesandele leiti kiiresti lahendus ja kiire vormistus. Ükski küsimus ei jäänud vastuseta.",
    name: "Mari",
    date: "26.08.2026"
  },
  {
    text: "Sain väga kiiresti reisipäringule vastuse ja vajaliku info. Olen korduvalt kasutanud Estraveli reisipakette ja alati rahule jäänud.",
    name: "Svetlana",
    date: "17.06.2026"
  },
  {
    text: "Väga kiired vastused, tunne oli, et konsultant on koguaeg olemas olenemata kellaajast.",
    name: "Allvar",
    date: "05.06.2026"
  }
];

const feedbackGrid = document.getElementById("feedback-grid");

feedbacks.forEach(function (item) {
  const card = document.createElement("div");
  card.className = "feedback-card";

  card.innerHTML =
    '<p class="feedback-quote">"' + item.text + '"</p>' +
    '<div class="feedback-author">' +
      '<p class="feedback-name">' + item.name + '</p>' +
      '<p class="feedback-date">' + item.date + '</p>' +
    '</div>';

  feedbackGrid.appendChild(card);
});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  const word = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    if (card.textContent.toLowerCase().includes(word)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const menuButton = document.getElementById("menu-button");
const menuList = document.getElementById("menu-list");

menuButton.addEventListener("click", function () {
  menuList.classList.toggle("open");
});

menuList.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menuList.classList.remove("open");
  });
});