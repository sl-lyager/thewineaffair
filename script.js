// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
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

// =====================================================
// RØDVIN FRAMES
// =====================================================

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

// =====================================================
// HVIDVIN FRAMES
// =====================================================

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

// =====================================================
// ROSEVIN FRAMES
// =====================================================
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

// =====================================================
// RØDVIN ANIMATION
// =====================================================

function afspilVin() {
  clearTimeout(vinTimer);

  vinAnimation.classList.add("active");

  // Størrelse
  vinAnimation.style.transform = "scale(0.9)";

  let frame = 0;

  // Animationens start og slut
  const startTop = 4;
  const slutTop = 12.25;

  // Frame 13 er det sidste frame,
  // hvor vinen bevæger sig ned mod glasset
  const bevægelsesFrames = 13;

  function næsteFrame() {
    vinAnimation.src = vinFrames[frame];

    // Frame 1-13:
    // Bevæg vinen fra 4rem til 12.25rem
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

// =====================================================
// HVIDVIN ANIMATION
// =====================================================

function afspilHvidvin() {
  clearTimeout(vinTimer);

  vinAnimation.classList.add("active");

  // Size
  vinAnimation.style.transform = "scale(0.9)";

  let frame = 0;

  // Start and end position
  const startTop = 19;
  const slutTop = 12.25;

  // Frame 13 is where the wine reaches the glass
  const bevægelsesFrames = 13;

  function næsteFrame() {
    vinAnimation.src = hvidvinFrames[frame];

    // Frames 1-13:
    // Flyt rosévinen fra 19rem til 12.25rem
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

// =====================================================
// ROSEVIN ANIMATION
// =====================================================

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
    // Flyt rosévinen fra 11rem til 12.25rem
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

// =====================================================
// RØDVIN KNAP
// =====================================================

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

// =====================================================
// HVIDVIN KNAP
// =====================================================

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

// =====================================================
// ROSÉVIN KNAP
// =====================================================

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
