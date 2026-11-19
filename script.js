// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

//     Forms.
const lokation = document.querySelector("#lokation");
const dato = document.querySelector("#dato");

const datoer = {
  kbh: [
    "20. marts 2027 - kl. 17:30",
    "27. marts 2027 - kl. 18:00",
    "10. april 2027 - kl. 19:00",
  ],

  odense: [
    "21. marts 2027 - kl. 17:30",
    "28. marts 2027 - kl. 18:00",
    "11. april 2027 - kl. 19:00",
  ],

  aalborg: [
    "22. marts 2027 - kl. 18:00",
    "29. marts 2027 - kl. 18:00",
    "12. april 2027 - kl. 19:00",
  ],
};

if (lokation && dato) {
  lokation.addEventListener("change", function () {
    dato.innerHTML = '<option value="">Vælg dato</option>';

    const valgteDatoer = datoer[lokation.value];

    if (valgteDatoer) {
      valgteDatoer.forEach(function (datoTekst) {
        const option = document.createElement("option");

        option.textContent = datoTekst;
        option.value = datoTekst;

        dato.appendChild(option);
      });
    }
  });
}

// fejlbeskeder
const form = document.querySelector(".form-placeholder");

if (form) {
  const navn = document.querySelector("#navn");
  const email = document.querySelector("#email");
  const tlf = document.querySelector("#tlf");

  //find fejlbeskederne
  const fejlbeskeder = document.querySelectorAll(".class-message");

  //funktion til at vise fejl
  function visFejl(input, besked) {
    besked.classList.add("show");
  }

  //Funktion til at skjule fejl
  function skjulFejl(besked) {
    besked.classList.remove("show");
  }

  //formularen når brugeren trykker tilmeld
  form.addEventListener("submit", function (event) {
    let fejl = false;

    //tjek navn
    if (navn.value.trim() === "") {
      visFejl(navn, fejlbeskeder[0]);
      fejl = true;
    } else {
      skjulFejl(fejlbeskeder[0]);
    }

    //tjek email
    if (email.value.trim() === "") {
      visFejl(email, fejlbeskeder[1]);
      fejl = true;
    } else if (!email.validity.valid) {
      visFejl(email, fejlbeskeder[1]);
      fejl = true;
    } else {
      skjulFejl(fejlbeskeder[1]);
    }

    //tjek tlf
    if (tlf.value.trim() === "") {
      visFejl(tlf, fejlbeskeder[2]);
      fejl = true;
    } else {
      skjulFejl(fejlbeskeder[2]);
    }

    //stop afsendelse hvis fejl
    if (fejl) {
      event.preventDefault();
    }
  });
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  // Henter formularens oplysninger fra URL'en
  const params = new URLSearchParams(window.location.search);

  // Henter værdier fra formularen
  const navn = params.get("navn");
  const svar = params.get("svar");
  const lokation = params.get("lokation");
  const dato = params.get("dato");
  const vin = params.get("vin");
  const niveau = params.get("niveau");
  const forventninger = params.getAll("forventning");

  //   Finder HTML-elementerne
  const navnOutput = document.querySelector(".navn");
  const alderOutput = document.querySelector(".alder");
  const lokationOutput = document.querySelector(".lokation-output");
  const datoOutput = document.querySelector(".dato-output");
  const vinOutput = document.querySelector(".vin-output");
  const niveauOutput = document.querySelector(".niveau-output");
  const forventningerOutput = document.querySelector(".forventninger-output");
  const profilOutput = document.querySelector(".profil-output");

  // Viser oplysningerne
  navnOutput.textContent = navn;
  alderOutput.textContent = svar === "ja" ? "18+" : "Under 18";
  datoOutput.textContent = dato;
  vinOutput.textContent = vin;

  //    Finder Lokations navn.
  if (lokation === "kbh") {
    lokationOutput.textContent = "København - Vinkælderen København";
  } else if (lokation === "odense") {
    lokationOutput.textContent = "Odense - Den Gamle Vinbar";
  } else if (lokation === "aalborg") {
    lokationOutput.textContent = "Aalborg - Nordlys Vin & Smag";
  }

  //   FINDER BRUGERENS VINNIVEAU.
  if (niveau === "1") {
    niveauOutput.textContent = "Nybegynder";
  } else if (niveau === "2") {
    niveauOutput.textContent = "Vin Elsker";
  } else if (niveau === "3") {
    niveauOutput.textContent = "Vin Entusiast";
  } else if (niveau === "4") {
    niveauOutput.textContent = "Vin Nørd";
  }

  //     VISER BRUGERENS FORVENTNINGER.
  const forventningTekster = {
    "god-vin": "God vin",
    "godt-selskab": "Godt selskab",
    "nye-oplevelser": "Nye oplevelser",
    "god-stemning": "Den gode stemning",
  };

  const valgteForventninger = forventninger.map(function (valg) {
    return forventningTekster[valg];
  });

  forventningerOutput.textContent = valgteForventninger.join(",");

  //   PERSONLIG VINPROFIL.
  if (vin === "Rødvin") {
    profilOutput.textContent =
      "Du er til fyldige smagsoplevelser og klassisk vin med karakter!";
  } else if (vin === "Hvidvin") {
    profilOutput.textContent =
      "Du foretrækker friske og elegante smagsoplevelser!";
  } else if (vin === "Rosévin") {
    profilOutput.textContent =
      "Du er til lette, frugtige og sommerlige vinoplevelser!";
  }

  //     ÆNDRER FARVE TEMA EFTER VIN VALG.
  if (vin) {
    opsamlingPlaceholder.dataset.vin = vin
      .toLowerCase()
      .replace("ø", "o")
      .replace("é", "e");
  }
}

// Flasker
const rødvin = document.querySelector(".svg4");
const hvidvin = document.querySelector(".svg3");
const rosevin = document.querySelector(".svg2");

// Knapper
const rødvinKnap = document.querySelector(".color1.rødvin");
const hvidvinKnap = document.querySelector(".color3.rødvin");
const rosevinKnap = document.querySelector(".color2.rødvin");

// Vinen
const vinAnimation = document.querySelector(".vin-animation");

// RØDVIN FRAMES

const vinFrames = [
  "SVG_Animation/svg illustration_Artboard 1 copy.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 2.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 3.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 4.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 5.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 6.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 7.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 8.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 9.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 10.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 11.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 12.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 13.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 14.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 15.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 16.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 17.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 18.svg",
  "SVG_Animation/svg illustration_Artboard 1 copy 19.svg",
];

// HVIDVIN FRAMES

const hvidvinFrames = [
  "Hvidvin-animation/hvidvin_Artboard 1 copy.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 2.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 3.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 4.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 5.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 6.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 7.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 8.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 9.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 10.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 11.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 12.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 13.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 14.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 15.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 16.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 17.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 18.svg",
  "Hvidvin-animation/hvidvin_Artboard 1 copy 19.svg",
];

let vinTimer;

// ROSEVIN FRAMES
const rosevinFrames = [
  "Rosevin-animation/rosevin_Artboard 1 copy.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 2.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 3.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 4.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 5.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 6.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 7.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 8.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 9.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 10.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 11.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 12.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 13.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 14.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 15.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 16.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 17.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 18.svg",
  "Rosevin-animation/rosevin_Artboard 1 copy 19.svg",
];

// RØDVIN ANIMATION

function afspilVin() {
  clearTimeout(vinTimer);

  vinAnimation.classList.add("active");

  // Størrelse
  vinAnimation.style.transform = "scale(0.9)";

  let frame = 0;

  // Animationens start og slut
  const startTop = 4;
  const slutTop = 12.25;

  // hvor vinen bevæger sig ned mod glasset
  const bevægelsesFrames = 13;

  function næsteFrame() {
    vinAnimation.src = vinFrames[frame];

    // Frame 1-13:
    if (frame < bevægelsesFrames) {
      const progress = frame / (bevægelsesFrames - 1);

      const nyTop = startTop + (slutTop - startTop) * progress;

      vinAnimation.style.top = `${nyTop}rem`;
    } else {
      // Fra frame 13 og frem bliver den ved glasset
      vinAnimation.style.top = `${slutTop}rem`;
    }

    frame++;

    // Stop efter sidste frame
    if (frame >= vinFrames.length) {
      clearTimeout(vinTimer);
      return;
    }

    // Hastighed
    const hastighed = frame <= bevægelsesFrames ? 150 : 125;

    vinTimer = setTimeout(næsteFrame, hastighed);
  }

  // Første frame
  vinAnimation.src = vinFrames[0];
  vinAnimation.style.top = `${startTop}rem`;

  frame = 1;

  vinTimer = setTimeout(næsteFrame, 150);
}

// HVIDVIN ANIMATION

function afspilHvidvin() {
  clearTimeout(vinTimer);

  vinAnimation.classList.add("active");

  // Størrelse
  vinAnimation.style.transform = "scale(0.9)";

  let frame = 0;

  // Start and end position
  const startTop = 19;
  const slutTop = 12.25;

  // Fra frame 13 og frem bliver den ved glasset
  const bevægelsesFrames = 13;

  function næsteFrame() {
    vinAnimation.src = hvidvinFrames[frame];

    // Frames 1-13:
    if (frame < bevægelsesFrames) {
      const progress = frame / (bevægelsesFrames - 1);

      const nyTop = startTop + (slutTop - startTop) * progress;

      vinAnimation.style.top = `${nyTop}rem`;
    } else {
      // Fra frame 13 og frem bliver den ved glasset
      vinAnimation.style.top = `${slutTop}rem`;
    }

    frame++;

    if (frame >= hvidvinFrames.length) {
      clearTimeout(vinTimer);
      return;
    }

    // Hastighed
    const hastighed = frame <= bevægelsesFrames ? 150 : 125;

    vinTimer = setTimeout(næsteFrame, hastighed);
  }

  // Første ramme
  vinAnimation.src = hvidvinFrames[0];
  vinAnimation.style.top = `${startTop}rem`;

  frame = 1;

  vinTimer = setTimeout(næsteFrame, 150);
}

// ROSEVIN ANIMATION

function afspilRosevin() {
  clearTimeout(vinTimer);

  vinAnimation.classList.add("active");

  // Størrelse
  vinAnimation.style.transform = "scale(0.9)";

  let frame = 0;

  // Start og slut
  const startTop = 11;
  const slutTop = 12.25;

  // Frame 13 er ved glasset
  const bevægelsesFrames = 13;

  function næsteFrame() {
    vinAnimation.src = rosevinFrames[frame];

    // Frame 1-13:
    if (frame < bevægelsesFrames) {
      const progress = frame / (bevægelsesFrames - 1);

      const nyTop = startTop + (slutTop - startTop) * progress;

      vinAnimation.style.top = `${nyTop}rem`;
    } else {
      // Fra frame 13 og frem bliver den ved glasset
      vinAnimation.style.top = `${slutTop}rem`;
    }

    frame++;

    if (frame >= rosevinFrames.length) {
      clearTimeout(vinTimer);
      return;
    }

    // Hastighed
    const hastighed = frame <= bevægelsesFrames ? 150 : 125;

    vinTimer = setTimeout(næsteFrame, hastighed);
  }

  // Første frame
  vinAnimation.src = rosevinFrames[0];
  vinAnimation.style.top = `${startTop}rem`;

  frame = 1;

  vinTimer = setTimeout(næsteFrame, 150);
}

// RØDVIN KNAP

rødvinKnap.addEventListener("toggle", function () {
  if (this.open) {
    // Luk de andre
    hvidvinKnap.removeAttribute("open");
    rosevinKnap.removeAttribute("open");

    hvidvin.classList.remove("pop");
    rosevin.classList.remove("pop");

    // Vis rødvinsflasken
    rødvin.classList.add("pop");

    // Start rødvin animationen
    setTimeout(() => {
      afspilVin();
    }, 500);
  } else {
    rødvin.classList.remove("pop");

    clearInterval(vinTimer);

    vinAnimation.classList.remove("active");
  }
});

// HVIDVIN KNAP

hvidvinKnap.addEventListener("toggle", function () {
  if (this.open) {
    // Luk de andre
    rødvinKnap.removeAttribute("open");
    rosevinKnap.removeAttribute("open");

    rødvin.classList.remove("pop");
    rosevin.classList.remove("pop");

    // Vis hvidvinsflasken
    hvidvin.classList.add("pop");

    // START HVIDVINS-ANIMATIONEN
    setTimeout(() => {
      afspilHvidvin();
    }, 500);
  } else {
    hvidvin.classList.remove("pop");

    clearInterval(vinTimer);

    vinAnimation.classList.remove("active");
  }
});

// ROSÉVIN KNAP

rosevinKnap.addEventListener("toggle", function () {
  if (this.open) {
    rødvinKnap.removeAttribute("open");
    hvidvinKnap.removeAttribute("open");

    rødvin.classList.remove("pop");
    hvidvin.classList.remove("pop");

    rosevin.classList.add("pop");

    // Start rosé-animationen
    setTimeout(() => {
      afspilRosevin();
    }, 500);
  } else {
    rosevin.classList.remove("pop");

    clearTimeout(vinTimer);

    vinAnimation.classList.remove("active");
  }
});
