let isMobileGeneral = false;

let disableScroll = false;

// document.querySelector("body").style.height = `${window.innerHeight}px`;

setTimeout(() => {
  document.querySelector(".container-outer").classList.add("show");

  document.querySelector("body").style.pointerEvents = "auto";

  //Add Event Listener to Biography  Button
  document.querySelector(".biography-button").addEventListener("click", () => {
    document.querySelector(".biography-container").style.display = "flex";

    if (isMobileGeneral) touchEvents.disableTouchEvents();

    if (!isMobileGeneral) disableScroll = true;

    setTimeout(() => {
      document
        .querySelector(".biography-container")
        .classList.add("show-biography-container");

      document
        .querySelector(".biography-container__button")
        .classList.remove("hide-biography-button");

      document
        .querySelector(".biography-container__button")
        .classList.add("show-biography-button");
    }, 10);
  });

  //Add Event Listener to Biography Container Button
  document
    .querySelector(".biography-container__button")
    .addEventListener("click", () => {
      if (isMobileGeneral) touchEvents.enableTouchEvents();

      if (!isMobileGeneral) disableScroll = false;

      document
        .querySelector(".biography-container")
        .classList.remove("show-biography-container");

      document
        .querySelector(".biography-container__button")
        .classList.add("hide-biography-button");

      document
        .querySelector(".biography-container__button")
        .classList.remove("show-biography-button");

      setTimeout(() => {
        document.querySelector(".biography-container").style.display = "none";
      }, 1000);
    });
}, 1000);
//}, 4500);

// setTimeout(() => {
//   document.querySelector(".intro-logo").classList.add("show-logo");
// }, 500);

// setTimeout(() => {
//   document.querySelector(".intro-logo__img").classList.add("show-logo");
// }, 700);

// setTimeout(() => {
//   document.querySelector(".intro-logo").classList.remove("show-logo");
// }, 4000);

//Check if mobile function

window.mobilecheck = function () {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      ) ||
      window.matchMedia("(any-pointer: coarse)").matches
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

if (window.mobilecheck()) {
  isMobileGeneral = true;
}

//Add mobile styles

if (!window.mobilecheck()) {
  document.querySelector("body").classList.add("body-desktop-version");
  document
    .querySelector(".container")
    .classList.add("container-desktop-version");
  document
    .querySelector(".container-gradient")
    .classList.add("container-gradient-version");
}

//Create Title Nodes

let assets = [
  {
    information: [
      { title: "OMGQJSC" },
      { year: "2019" },
      { duration: "08:00" },
      { type: "fiction" },
    ],
    imgFile: "./images/OMGQJSC.png",
    link: "https://vimeo.com/414274175/101dc755ed",
    linkID: "414274175/101dc755ed",
    credits:
      "DIRECTED BY JOHN GRAY WITH MARYLOU MAYNIEL  ELLIOTT DANIEL JOHNSON  YOUSSOUF SY  JORDAN PEREIRA  CÔME GALAN  DIRECTOR OF PHOTOGRAPHY GRÉGOIRE LOBUT SCREENPLAY BY JOHN GRAY  JEAN-BAPTISTE RICHON  BENJAMIN LAMOUROUX PRODUCED BY CÔME GALAN  JOHN GRAY EDITED BY BENJAMIN LAMOUROUX DRONE OPERATOR HANSLEY  DIRECTOR OF PRODUCTION CÔME GALAN DIRECTOR ASSISTANT ALEXIA LOBUT PRODUCTION ASSISTANT LUCIE CHIGIONI SET PHOTOGRAPHER ELODIE TANN FIRST CAMERA ASSISTANT VALENTIN CORNOT SECOND CAMERA ASSISTANT BENJAMIN LAMOUROUX CHIEF ELECTRICIAN GRÉGOIRE LOBUT ASSISTANT ELECTRICIAN KENTIN GOBE STAGE MANAGEMENT PIERRE DANSETTE ORIGINAL MUSIC COMPOSED BY TIMOTHÉE JOLY GRAPHIC DESIGN BY RUPTURES STUDIO MARYLOU MAYNIEL’S COSTUME BY DRÔNE COLOR GRADING JADE DE BRITO SOUND INGENIOR LUCIEN ORIOL RE-RECORDING MIXER MATTHIEU FRATICELLI SPECIAL THANKS TO PIERRE-HENRI GALAN  ALEXANDRINE BOUSSION  RÉGION BRETAGNE  SNSM (SOCIETES DES SAUVETEURS EN MER)  ASTRID CAMPION  EMMANUEL DE WATRIGANT  ARNAUD FAURE  PATRICIA GAUTIER  ARTHUR ZERBINATTI",
    summary:
      "The dazzling-story of a romantic encounter… mirror of an invisible rupture",
  },
  {
    information: [
      { title: "SO" },
      { year: "2018" },
      { duration: "29:45" },
      { type: "docu-fiction" },
    ],
    imgFile: "./images/SO-WHITE.png",
    link: "https://vimeo.com/454163614/37244d1799",
    linkID: "454163614/37244d1799",
    credits:
      "A FILM BY JOHN GRAY SCREENPLAY MATHIEU BERTAUX  JOHN GRAY  LOUISE PERBET PRODUCTION DIRECTOR CÔME GALAN PRODUCED BY CÔME GALAN  JOHN GRAY CAST MATHIEU BERTAUX  JEAN-BAPTISTE RICHON  CÔME GALAN  LOUISE PERBET  THEODORE BOYER CHAMAR  PAUL CHARLES LOUIS  SALIMA BELORGEY  SARAH GALAN  JADE CHAPERON  LOUIS BREDA  LUCAS FOLET MUSIC TIMOTHÉE JOLY DIRECTORS OF PHOTOGRAPHY ALEXIS GOYARD  CYPRIEN MUR 1ST CAMERA ASSISTANT BASILE BAUDELET 2ND CAMERA ASSISTANT SIMON GOUFFAULT STEADYCAM OPERATOR GRÉGOIRE LOBUT SOUND ENGINEER PAUL BESSOT  GUILLAUME LADIRAY SOUND EDITOR PHILIPPE CHARIOT RE-RECORDING MIXER MATTHIEU FRATICELLI EDIT BENJAMIN LAMOUROUX COLOR GRADING NICOLAS JARDIN TITLE DESIGN RAFAEL RIBAS SET PHOTOGRAPHER ELODIE TANN PARTY GIRLS ATIA KAPONTON  GWENDOLYNE DUMOULIN  CLARA LE LOUET  ELODIE TANN PARTY BOYS CÔME CARDEA  PAUL CHIGIONI  VALENTIN GUYONNET  NICOLAS JOURNEAU  BENJAMIN LAMOUROUX  JORDAN MEDINA SHUG  GUILLAUME TRESSON  ARTHUR ZERBINATTI ADDITIONAL MUSICS JUL COMME LES GENS D’ICI  SAFIA BAHMED-SCHARTZ FEAT TIMOTHÉE JOLY FINI L’ETE   YUNG LEAN AGONY THANKS TO LUCIE BOUTEILLE  CARLA GUERRA  MAURICE MICHELOT  KOCHÉ",
    summary:
      "The links, the choices, the life of the youth in the Parisian suburbs during the Christmas holidays.",
  },
  {
    information: [
      { title: "ZOZO" },
      { year: "2019" },
      { duration: "03:05" },
      { type: "fiction" },
    ],
    imgFile: "./images/zozo.png",
    link: "https://vimeo.com/410279060/1bb53b52d6",
    linkID: "410279060/1bb53b52d6",
    credits:
      "DIRECTED BY JOHN GRAY WITH ZOË VNAK THEOPHILE BANCAL PRODUCED BY JOHN GRAY  CÔME GALAN DIRECTOR OF PHOTOGRAPHY CYPRIEN MUR SOUND PAUL BESSOT MAKE UP SENSHI DRONE OPERATOR HANSLEY EDIT BENJAMIN RE-RECORDING MIXER MATTHIEU FRATICELLI MUSIC TIMOTHÉE JOLY TITLE DESIGN RAFAEL RIBAS COLOR GRADE ANTOINE RAVACHE THANKS TO JEAN-BAPTISTE RICHON  KOCHÉ",
    summary:
      "Zoë is photographed in a cave where the water in the waterfall no longer flows.",
  },
  {
    information: [
      { title: "DOCTEUR BLANCHE" },
      { year: "2020" },
      { duration: "01:00" },
      { type: "teaser" },
    ],
    imgFile: "./images/DB1-cropped.png",
    link: "https://vimeo.com/397771230/34cb77e40d",
    linkID: "397771230",
    credits:
      "DIRECTED BY JOHN GRAY WITH CÔME GALAN STYLISM BY CAROLINE DUSSUEL DIRECTOR OF PHOTOGRAPHY THEODORE HUGONNIER LABORATORY SILVERWAY PARIS EDIT BENJAMIN LAMOUROUX MUSIC : BABY BEN, DJEEP, MIDI BABY REAL & DJEEP - SEUL ET POURTANT (PROD. BABYBEN) (SPECIAL EDIT BY PHOTO)",
    summary: "A young rockstar feels alone after a crazy concert.",
  },
];

let bio = {
  logo: "./images/JG_final1.png",
  rawHTML:
    "John Gray is a French film director born in Paris in 1993. In 2015 he produced the video clip Rolling Stone by Jorrdee with his collective of artists 3.0.87 and then collaborated the following year with Astrid Campion (artist-researcher) on the documentary film Les Devenirs du Charisme which questions the role and future of the French elite. He then produced several videos of brands, including VITO, to present the collection of a young stylist. In 2017, he co-wrote, co-produced and directed OMGQJSC (Oh My God Quand J’ai Su Ca), a pilot episode of a musical series without dialogues. The episode will become an 8 minutes film and be completed two years later. Meanwhile, he realizes the documentary portrait of his roommate, Tober, in the film S/O. He then decides to close this serie of self-produced films with his friend and producer Côme Galan by shooting ZOZO, a short film that is close to the aesthetics of an advertisement. In February 2020, he released his three films accompanied by the works of two other artists (Eliane Maluréanu and Elodie Tann) during the immersive exhibition Doctor Blanche, for which he took charge of the artistic direction with his friend and journalist Paul Chigioni.",
};

let nodesArray = [];

//Init Layout

const createBioNode = (index) => {
  let lineTop = document.createElement("div");
  let lineBottom = document.createElement("div");
  lineTop.classList.add("bio-container__line-top");
  lineBottom.classList.add("bio-container__line-bottom");

  let node = document.createElement("div");
  node.appendChild(lineTop);
  let imgContainer = document.createElement("div");
  let imgNode = document.createElement("img");
  imgNode.src = bio.logo;
  let bioNode = document.createElement("div");
  bioNode.innerHTML = bio.rawHTML;

  imgContainer.appendChild(imgNode);
  // node.appendChild(imgContainer);
  node.appendChild(bioNode);

  node.classList.add("title-container");
  node.classList.add("bio-container");
  node.setAttribute("id", `title-container-${index + 1}`);

  node.appendChild(lineBottom);

  imgContainer.classList.add("bio-container__image");
  bioNode.classList.add("bio-container__bio");

  nodesArray.push(node);
};

const createNode = (asset, index) => {
  let node = document.createElement("div");
  let imgContainer = document.createElement("div");
  let imgNode = document.createElement("img");
  imgNode.src = asset.imgFile;
  let containerInner = document.createElement("div");
  // let infoNode = document.createElement("div");

  // asset.information.map(item => {
  //   let subInfoNode = document.createElement("div");
  //   let subInfoNodeText = document.createTextNode(Object.values(item));
  //   subInfoNode.appendChild(subInfoNodeText);
  //   infoNode.appendChild(subInfoNode);
  // });

  imgContainer.appendChild(imgNode);
  containerInner.appendChild(imgContainer);
  // containerInner.appendChild(infoNode);
  node.appendChild(containerInner);

  node.classList.add("title-container");
  node.setAttribute("data-id", index);
  node.setAttribute("id", `title-container-${index + 1}`);
  imgContainer.classList.add("title-container__image");
  // infoNode.classList.add("title-container__information");

  containerInner.classList.add("title-container-inner");
  containerInner.classList.add("not-loading");

  nodesArray.push(node);
};

//Create Credits Node

const createCreditsNode = (dataID) => {
  let creditsNode = document.createElement("div");
  let infoNode = document.createElement("div");
  let summaryNode = document.createElement("div");
  summaryNode.innerHTML = assets[dataID].summary;
  let creditsTextNode = document.createElement("div");
  creditsTextNode.innerHTML = assets[dataID].credits;

  assets[dataID].information.map((item) => {
    let subInfoNode = document.createElement("div");
    let subInfoNodeText = document.createTextNode(Object.values(item));
    subInfoNode.appendChild(subInfoNodeText);
    infoNode.appendChild(subInfoNode);
  });

  // imgContainer.appendChild(imgNode);
  // node.appendChild(imgContainer);

  creditsNode.appendChild(infoNode);
  creditsNode.appendChild(summaryNode);
  creditsNode.appendChild(creditsTextNode);

  // node.classList.add("title-container");
  creditsNode.classList.add("credits-container");
  creditsNode.classList.add("hidden-credits");

  // node.appendChild(lineBottom);

  // imgContainer.classList.add("bio-container__image");
  infoNode.classList.add("credits-container__information");
  summaryNode.classList.add("credits-container__summary");
  creditsTextNode.classList.add("credits-container__text");

  if (!window.mobilecheck()) {
    let plyrNode = document.querySelector(".plyr");
    plyrNode.prepend(creditsNode);
  } else {
    let containerVideoOverlay = document.querySelector(
      ".container-video-overlay"
    );
    containerVideoOverlay.prepend(creditsNode);
    let credits = document.querySelector(".credits-container");
    credits.addEventListener("click", () => {
      allContainerLocations.map((item, index) => {
        item.toggleCredits();
      });
    });
  }
};

//Create All Nodes

assets = [...assets, ...assets];

assets.map((asset, index) => {
  createNode(asset, index);
});

// createBioNode(4);

// Container Location Object

let player;
let initialMultiplier = 1;

class containerLocationObject {
  constructor(index) {
    this.element = document.querySelector(`#title-container-${index + 1}`);
    this.elementHeight = window.innerHeight;
    this.index = index;
    this.positionY = this.element.getBoundingClientRect().y;
    this.isInViewPort = true;
    this.videoContainer = document.querySelector(".container-video-overlay");
    this.videoContainerClose = document.querySelector(
      ".container-video-overlay__top-bar__close"
    );
    this.videoContainerCredits = document.querySelector(
      ".container-video-overlay__top-bar__information"
    );
    this.creditsOpen = false;
    this.player = null;
    this.originalPlayerDiv = document
      .querySelector(".plyr__video-embed")
      .cloneNode(true);
    this.event;

    this.element.addEventListener("click", (e) => this.openVideo(e));
    this.videoContainerClose.addEventListener("click", (e) =>
      this.closeVideo(e)
    );
    this.videoContainerCredits.addEventListener("click", (e) =>
      this.toggleCredits()
    );
  }

  enterVideo(dataID) {
    let blurElement = { a: 0 };

    function applyBlur() {
      gsap.to(document.querySelector(".container"), {
        webkitFilter: "blur(" + blurElement.a + "px)",
      });

      document
        .querySelector(".biography-button")
        .classList.add("hide-biography-button");

      document
        .querySelector(".biography-button")
        .classList.remove("show-biography-button");

      document.querySelector(".container").style.pointerEvents = "none";
    }

    gsap.to(blurElement, {
      a: 35,
      ease: Power1.easeInOut,
      duration: 1,
      onUpdate: applyBlur,
    });

    gsap.to(this.videoContainer, {
      display: "block",
      opacity: 1,
      // y: "-3%",
      force3D: true,
      ease: Power1.easeInOut,
      duration: 1,
      delay: 1.5,
      onComplete: () => {
        //Reset Cursor
        document.body.style.cursor = "auto";
        this.event.children[0].classList.remove("loading");
        this.event.children[0].classList.add("not-loading");

        createCreditsNode(dataID);
      },
    });
  }

  createVideo(event) {
    let dataID = event.getAttribute("data-id");
    let linkID = assets[dataID].linkID;
    let link = `https://player.vimeo.com/video/${linkID}?playsinline=true&amp;loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;transparent=0&amp;gesture=media`;

    document.getElementById("plyr-video-iframe").setAttribute("src", link);

    player = new Plyr("#player", {
      fullscreen: { enabled: true, fallback: true, iosNative: true },
      loop: { active: true },
    });

    player.on("ready", (event) => {
      this.enterVideo(dataID);
    });
  }

  openVideo(e) {
    this.event = e.currentTarget;

    if (isMobileGeneral) touchEvents.disableTouchEvents();

    //destroy
    if (!isMobileGeneral) disableScroll = true;

    //Set Cursor to loading
    document.body.style.cursor = "wait";

    this.event.children[0].classList.add("loading");
    this.event.children[0].classList.remove("not-loading");

    this.createVideo(this.event);
  }

  closeVideo(e) {
    let blurElement = { a: 35 };

    this.creditsOpen = false;

    player.pause();

    function applyBlur() {
      gsap.to(document.querySelector(".container"), {
        webkitFilter: "blur(" + blurElement.a + "px)",
      });
    }

    gsap.to(blurElement, {
      a: 0,
      ease: Power1.easeInOut,
      onUpdate: applyBlur,
    });

    gsap.to(this.videoContainer, {
      display: "none",
      opacity: 0,
      // y: "3%",
      force3D: true,
      ease: Power1.easeInOut,
      duration: 0.3,
    });

    gsap.to(document.querySelector(".container"), {
      opacity: 1,
      ease: Power1.easeInOut,
      duration: 1,
      delay: 0.1,
      onComplete: () => {
        //Remove Credits

        if (isMobile) {
          let parentNodeCredits = document.querySelector(
            ".container-video-overlay"
          );
          let childNodeCredits = document.querySelector(".credits-container");

          if (childNodeCredits) parentNodeCredits.removeChild(childNodeCredits);
        }

        // Remove Plyr and Video, then add the original Iframe

        let parentNode = document.querySelector(".video-player-container");
        let childNode = document.querySelector(".video-player-container")
          .children[1];

        parentNode.removeChild(childNode);
        parentNode.appendChild(this.originalPlayerDiv);

        this.originalPlayerDiv = document
          .querySelector(".plyr__video-embed")
          .cloneNode(true);

        player.destroy();

        document
          .querySelector(".biography-button")
          .classList.remove("hide-biography-button");

        document
          .querySelector(".biography-button")
          .classList.add("show-biography-button");

        document.querySelector(".container").style.pointerEvents = "auto";

        if (isMobileGeneral) touchEvents.enableTouchEvents();

        if (!isMobileGeneral) {
          setTimeout(() => {
            disableScroll = false;
          }, 200);
        }
      },
    });
  }

  toggleCredits() {
    let credits = document.querySelector(".credits-container");

    if (!this.creditsOpen) {
      credits.style.display = "block";

      setTimeout(() => {
        credits.classList.remove("hidden-credits");
        credits.classList.add("show-credits");
      }, 100);
      this.creditsOpen = true;
    } else {
      credits.classList.add("hidden-credits");
      credits.classList.remove("show-credits");
      setTimeout(() => {
        credits.style.display = "none";
      }, 300);
      this.creditsOpen = false;
    }
  }

  setContainerLocation() {
    let initTop;

    initTop = window.innerHeight * 0.25;

    if (initialMultiplier === 1) {
      initialMultiplier += 1;
      this.element.style.transform = `translate(-50%,${initTop}px)`;
      return;
    }

    initTop =
      initialMultiplier * window.innerHeight * 0.5 - this.elementHeight / 4;

    initialMultiplier += 1;

    this.element.style.transform = `translate(-50%,${initTop}px)`;
  }

  updateOpacity() {
    let opacity;

    let center = this.positionY - window.innerHeight / 4;
    let threeQuarters = (window.innerHeight / 4) * 3;
    let divide = center / threeQuarters;

    if (center < 0) {
      opacity = 1 + divide;
    } else {
      opacity = 1 - divide;
    }

    this.element.style.opacity = opacity;
  }

  updateIsInViewport() {
    this.positionY = this.element.getBoundingClientRect().y;

    let center = this.positionY - window.innerHeight / 4;

    if (
      center > (-window.innerHeight * 3) / 4 &&
      center < (window.innerHeight * 3) / 4
    ) {
      this.isInViewPort = true;
    } else {
      this.isInViewPort = false;
    }

    if (this.isInViewPort) {
      return this.updateOpacity();
    }
  }
}

let allContainerLocations = nodesArray.map((item, index) => {
  document.querySelector(".container").appendChild(nodesArray[index]);
  let containerLocation = new containerLocationObject(index);
  containerLocation.setContainerLocation();
  return containerLocation;
});

//Scroll Object

class scrollObject {
  constructor() {
    this.previousPosition = 0;
    this.isScrolling = false;
    this.isScrollingTimeout = null;
    this.tween;
  }

  scrolledMobile(e, resetDirection) {
    // allContainerLocations.map((item, index) => {
    //   item.updateIsInViewport();
    // });

    if (disableScroll) return;

    let delta = e;

    mainContainer.translateMainContainer(delta);

    this.previousPosition = e;

    this.isScrolling = true;

    //Re Center On Stop Scroll
    clearTimeout(this.isScrollingTimeout);
    this.isScrollingTimeout = setTimeout(() => {
      this.isScrolling = false;
      let element = document.querySelector(`.container`);

      let preAmount = element.style.transform
        .split(", ")[1]
        .split("")
        .slice(0, -3)
        .join("");

      let amount = parseInt(preAmount) + delta;

      let innerHeight = window.innerHeight;

      let currentLocation = amount / innerHeight;

      let multiplier = currentLocation.toString().split(".")[0];
      let fraction = parseFloat(
        `0.${currentLocation.toString().split(".")[1]}`
      );

      let translateTo = 0;

      if (Math.abs(fraction) >= 1 / 3 && Math.abs(fraction) <= 2 / 3) {
        amount > 0
          ? (translateTo = innerHeight / 2 + multiplier * innerHeight)
          : (translateTo = -innerHeight / 2 + multiplier * innerHeight);
      } else if (Math.abs(fraction) >= 0 && Math.abs(fraction) < 1 / 3) {
        translateTo = multiplier * innerHeight;
      } else if (Math.abs(fraction) <= 1 && Math.abs(fraction) > 2 / 3) {
        amount > 0
          ? (translateTo = innerHeight + multiplier * innerHeight)
          : (translateTo = -innerHeight + multiplier * innerHeight);
      }

      this.tween = gsap.to(element, {
        ease: Power3.easeInOut,
        y: translateTo - 25,
        duration: 2,
        force3D: true,
        onUpdate: () => {
          // allContainerLocations.map((item, index) => {
          //   item.updateIsInViewport();
          // });
        },
      });
      mainContainer.previousPosition = translateTo - 25;
    }, 2000);

    // if (this.tween) this.tween.kill();
  }

  scrolled(e, resetDirection) {
    // allContainerLocations.map((item, index) => {
    //   item.updateIsInViewport();
    // });

    if (disableScroll) return;

    let delta = e;

    mainContainer.translateMainContainer(delta);

    this.previousPosition = e;

    this.isScrolling = true;

    //Re Center On Stop Scroll
    clearTimeout(this.isScrollingTimeout);
    this.isScrollingTimeout = setTimeout(() => {
      this.isScrolling = false;
      let element = document.querySelector(`.container`);

      let preAmount = element.style.transform
        .split(", ")[1]
        .split("")
        .slice(0, -3)
        .join("");

      let amount = parseInt(preAmount) + delta;

      let innerHeight = window.innerHeight;

      let currentLocation = amount / innerHeight;

      let multiplier = currentLocation.toString().split(".")[0];
      let fraction = parseFloat(
        `0.${currentLocation.toString().split(".")[1]}`
      );

      let translateTo = 0;

      if (Math.abs(fraction) >= 1 / 3 && Math.abs(fraction) <= 2 / 3) {
        amount > 0
          ? (translateTo = innerHeight / 2 + multiplier * innerHeight)
          : (translateTo = -innerHeight / 2 + multiplier * innerHeight);
      } else if (Math.abs(fraction) >= 0 && Math.abs(fraction) < 1 / 3) {
        translateTo = multiplier * innerHeight;
      } else if (Math.abs(fraction) <= 1 && Math.abs(fraction) > 2 / 3) {
        amount > 0
          ? (translateTo = innerHeight + multiplier * innerHeight)
          : (translateTo = -innerHeight + multiplier * innerHeight);
      }

      this.tween = gsap.to(element, {
        ease: Power3.easeInOut,
        y: translateTo,
        duration: 3,
        force3D: true,
        onUpdate: () => {
          // allContainerLocations.map((item, index) => {
          //   item.updateIsInViewport();
          // });
        },
      });
      mainContainer.previousPosition = translateTo;
    }, 600);

    // if (this.tween) this.tween.kill();
  }
}

let isMobile = window.mobilecheck() ? true : false;

class mainContainerConstructor {
  constructor() {
    this.previousPosition = 0;
    this.element = document.querySelector(`.container`);
    this.containerBottom = null;
    this.containerTop = null;
    this.scrollAmount = 0;
    this.indexUp = assets.length - 1;
    this.scrollThresholdUp = -4;
    this.indexDown = 0;
    this.scrollThresholdDown = -4;
    this.multiplierDown = assets.length + 0.5;
    this.multiplierUp = -0.5;
    this.tween = null;
    this.delta = 0;
  }

  translateMainContainer(delta, isPanning) {
    // this.delta =
    //   Math.abs(delta) > 20 && isMobile
    //     ? delta > 0
    //       ? 20
    //       : -20
    //     : Math.abs(delta) > 100
    //     ? delta > 0
    //       ? 100
    //       : -100
    //     : delta;

    this.delta = delta;

    this.tween = gsap.to(this.element, {
      ease: Expo.easeOut,
      y: this.previousPosition + this.delta,
      duration: isMobile ? 3 : 1,
    });

    let scrollAmount = this.previousPosition;

    this.shuffleElements(scrollAmount, this.delta);

    this.previousPosition = this.previousPosition + this.delta;
  }

  shuffleElements(scrollAmount, delta) {
    this.containerBottom = scrollAmount;
    this.containerTop = scrollAmount;

    this.scrollRatio = scrollAmount / window.innerHeight;

    if (this.scrollRatio > this.scrollThresholdUp / 2 && delta >= 0) {
      this.element.children[this.indexUp].style.transform = `translate(-50%,${
        (window.innerHeight / 2) * this.multiplierUp
      }px)`;

      this.multiplierUp -= 1;
      this.multiplierDown -= 1;

      if (this.indexUp > 0) {
        this.indexUp -= 1;
      } else {
        this.indexUp = assets.length - 1;
      }

      if (this.indexDown > 0) {
        this.indexDown -= 1;
      } else {
        this.indexDown = assets.length - 1;
      }

      this.scrollThresholdUp += 1;
      this.scrollThresholdDown += 1;
    } else if (this.scrollRatio < this.scrollThresholdDown / 2 && delta <= 0) {
      this.element.children[this.indexDown].style.transform = `translate(-50%,${
        (window.innerHeight / 2) * this.multiplierDown
      }px)`;

      this.multiplierDown += 1;
      this.multiplierUp += 1;

      if (this.indexDown < assets.length - 1) {
        this.indexDown += 1;
      } else {
        this.indexDown = 0;
      }

      if (this.indexUp < assets.length - 1) {
        this.indexUp += 1;
      } else {
        this.indexUp = 0;
      }

      this.scrollThresholdDown -= 1;
      this.scrollThresholdUp -= 1;
    }
  }
}

let mainContainer = new mainContainerConstructor();

mainContainer.translateMainContainer(0);

let scroll = new scrollObject();

//CROSS-BROWSER NORMALIZE WHEEL
var hamster = Hamster(window);

if (!window.mobilecheck()) {
  hamster.wheel(function (event, delta, deltaX, deltaY) {
    event.preventDefault();
    // console.log(delta, deltaX, deltaY);
    scroll.scrolled(delta);
  });
}

//Touch Javascript

let touchStart = (e) => {
  touchEvents.touchStart(e);
};

let touchMove = (e) => {
  touchEvents.touchMove(e);
};

let touchEnd = (e) => {
  touchEvents.touchEnd(e);
};

class touchEventsObject {
  constructor() {
    this.element = document.querySelector(`.container`);
    this.initialY;
    this.previousY = 0;
    this.deltaY;
    this.tween = null;
    this.direction;

    window.addEventListener("touchstart", touchStart);

    window.addEventListener("touchmove", touchMove);

    window.addEventListener("touchend", touchEnd);
  }

  disableTouchEvents() {
    window.removeEventListener("touchstart", touchStart);
    window.removeEventListener("touchmove", touchMove);
    window.removeEventListener("touchend", touchEnd);
  }

  enableTouchEvents() {
    window.addEventListener("touchstart", touchStart);

    window.addEventListener("touchmove", touchMove);

    window.addEventListener("touchend", touchEnd);
  }

  touchStart(e) {
    this.initialY = e.touches[0].clientY;

    this.startTouchTime = new Date().getTime();
  }

  touchMove(e) {
    this.currentY = e.touches[0].clientY;
    this.currentTouchTime = new Date().getTime();

    this.direction = this.currentY - this.previousY >= 0 ? "up" : "down";

    if (!this.triggered) {
      this.deltaY = this.currentY - this.initialY;
    } else {
      this.initialY = this.previousY;
      this.deltaY = this.currentY - this.initialY;
    }

    this.previousDirection =
      this.currentY - this.previousY >= 0 ? "up" : "down";

    this.previousY = this.currentY;

    if (this.currentTouchTime < this.startTouchTime + 150) {
      scroll.scrolledMobile(this.deltaY * 2);
    } else {
      scroll.scrolledMobile(this.deltaY * 1);
    }

    this.triggered = true;
  }

  touchEnd(e) {
    this.triggered = false;
  }
}

let touchEvents;
if (window.mobilecheck()) {
  touchEvents = new touchEventsObject();
}
