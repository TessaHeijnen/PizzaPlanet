// Bron afbeeldingen: https://www.freepik.com/author/catalyststuff //

/* Tekst + button Home */
var maintext = document.querySelector(".maintext");
var letsgobutton = document.querySelector(".letsgobutton");

/* planten + astro eet pizza Home */
var backgrounddefault = document.querySelector("#backgrounddefault");
var blueplanet = document.querySelector("#blueplanet");
var redplanet = document.querySelector("#redplanet");
var moon = document.querySelector("#moon");
var miniufo = document.querySelector("#miniufo");
var saturnus = document.querySelector("#saturnus");
var earth = document.querySelector("#earth");
var astropizza = document.querySelector("#astropizza");
var arrayElementen = [
  blueplanet,
  redplanet,
  saturnus,
  earth,
  letsgobutton,
  astropizza,
];
console.log(blueplanet); //kan deze weg nu?

/* Stardust scherm */
var metertotaal = document.querySelector(".meter");
var ster = document.querySelectorAll(".star");
var astrofly = document.querySelector(".astrofly");

var tweedeArrayElementen = [metertotaal, astrofly, moon, miniufo];
console.log(tweedeArrayElementen);

/* sterren verdwijnen */
var clickstarstext = document.querySelector(".clickstarstext");

var starround1 = document.querySelector("#starround1");
var starround2 = document.querySelector("#starround2");
var starround3 = document.querySelector("#starround3");
var starround4 = document.querySelector("#starround4");
var starround5 = document.querySelector("#starround5");
var starround6 = document.querySelector("#starround6");
var star1 = document.querySelector("#star1");
var star2 = document.querySelector("#star2");
var star3 = document.querySelector("#star3");
var star4 = document.querySelector("#star4");

starround1.addEventListener("click", function () {
  starround1.classList.add("showstar");
});
starround2.addEventListener("click", function () {
  starround2.classList.add("showstar");
});
starround3.addEventListener("click", function () {
  starround3.classList.add("showstar");
});
starround4.addEventListener("click", function () {
  starround4.classList.add("showstar");
});
starround5.addEventListener("click", function () {
  starround5.classList.add("showstar");
});
starround6.addEventListener("click", function () {
  starround6.classList.add("showstar");
});
star1.addEventListener("click", function () {
  star1.classList.add("showstar");
});
star2.addEventListener("click", function () {
  star2.classList.add("showstar");
});
star3.addEventListener("click", function () {
  star3.classList.add("showstar");
});
star4.addEventListener("click", function () {
  star4.classList.add("showstar");
});

/* HOME SCHERM -----------------------------------------------------------------------*/

// Bron: Evi //

setTimeout(function () {
  maintext.innerText = "I Deliver Pizza's every lightyear,";
}, 2000);

setTimeout(function () {
  maintext.innerText = "so i can say hello to my alien bestfriend";
}, 4000);

setTimeout(function () {
  maintext.innerText = "Soooo, wanna go on an adventure with me???";
  letsgobutton.classList.remove("hideplanets");
}, 6500);

/* Astro eet pizza  */
var astrostill = document.querySelector("#astropizza");
var astrostatus = "uit";

function gifplay() {
  if (astrostatus == "aan") {
    astrostill.src = "home/astro.png";
    astrostatus = "uit";
  } else if (astrostatus == "uit") {
    astrostill.src = "home/astro.gif";
    astrostatus = "aan";
  }
}

astrostill.addEventListener("mouseover", gifplay);

/* STARDUST SCHERM -----------------------------------------------------------------------*/

letsgobutton.addEventListener("click", function () {
  arrayElementen.forEach((element) => {
    element.classList.add("hideplanets");
  });
  /* nieuwe elementen tevoorschijn, stardust scherm  */
  ster.forEach((element) => {
    element.classList.remove("showstar");
  });
  metertotaal.classList.remove("showmeter");
  astrofly.classList.remove("showastrofly");
  maintext.innerText = "";

  /* tekst tevoorschijn, stardust scherm  */
  clickstarstext.classList.remove("hideclickstarstext");

  /* tekst verdwijnt  */
  setTimeout(function () {
    clickstarstext.classList.add("hideclickstarstext");
  }, 5000);
});

// Samen met Eric gedaan //
/* Stardust meter */
var bar = document.querySelector(".bar");
var starmeter = document.querySelector("#starmeter");
var stardusttext = document.querySelector("h2");
var kiesuitdrie = document.querySelector(".kiesuitdrie");

function steromhoog() {
  bar.style.height = bar.offsetHeight + 57.5 + "px";
  starmeter.style.height = starmeter.offsetHeight + 125 + "px";
  console.log("steromhoog + 100");

  /* show missie behaald text */
  if (starmeter.offsetHeight >= 1300) {
    stardusttext.classList.remove("stardusttext");

    /*  missie behaald text verdwijnt */
    setTimeout(function () {
      stardusttext.classList.add("stardusttext");
    }, 3000);
    /*  Collect stardust scherm, verdwijnt */
    setTimeout(function () {
      tweedeArrayElementen.forEach(function (element) {
        element.classList.add("hidestardustscherm");
        /*  Alle elementen tevoorschijn, Kies scherm */
        kiesuitdrie.classList.remove("kiesuitdrie");
      });
    }, 3000);
  }
}

ster.forEach((element) => {
  element.addEventListener("click", steromhoog);
});

/* KIES SCHERM -----------------------------------------------------------------------*/

/* Als je op de pizza button klikt...  */
var knoppen = document.querySelector(".buttons");
var deliverbutton = document.querySelector(".deliverbutton");
var fightbutton = document.querySelector(".fightbutton");

var kiestekst = document.querySelector("h3");

fightbutton.addEventListener("click", function () {
  knoppen.classList.add("hidebuttons");
  kiestekst.classList.add("hidebuttons");
  fightscherm.classList.remove("hidefightscherm");
  alien.classList.add("hid");
  astroufo.classList.add("hid");
  winningastro.classList.add("hid");
});

/* Gekozen voor: Pizza bezorgen -----------------------------------------------------------------------*/

/* Pizza's + vacuum  */
var deliverpizzatoalien = document.querySelector(".deliverpizzatoalien");

/* verdwijnen knoppen + start tekst */
deliverbutton.addEventListener("click", function () {
  dragtext.classList.remove("hidedragtext");
  knoppen.classList.add("hidebuttons");
  kiestekst.classList.add("hidebuttons");
  console.log(deliverbutton);

  /* pizza's en alien tevoorschijn */
  deliverpizzatoalien.classList.remove("deliverpizzatoalien");
});

/*  Pizza Deliver Drag and Drop */
var vacuum = document.querySelector(".vacuum");
var astroufo = document.querySelector("#astroufo");
var alien = document.querySelector("#sadalien");

var orangeplanet = document.querySelector("#orangeplanet");
var littlemoon = document.querySelector("#littlemoon");

var pizzas = document.querySelectorAll(".pizza");
var numPizzasDropped = 0;
var pizza1 = document.querySelector("#pizza1");
var pizza2 = document.querySelector("#pizza2");
var pizza3 = document.querySelector("#pizza3");
var pizza4 = document.querySelector("#pizza4");
var pizza5 = document.querySelector("#pizza5");

var dragtext = document.querySelector(".dragtext");
var endingpizzatext = document.querySelector(".endingpizza");

// Bron, item slepen en ergens droppen: https://www.youtube.com/watch?v=_G8G1OrEOrI / https://github.com/NikValdez/dragAndDrop //

/*  Slepen */
pizzas.forEach((element) => {
  element.addEventListener("dragstart", function (event) {
    console.log(event);
    event.target.classList.add("dragging");
  });

  /*  Verplaatsen */
  alien.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  /*  Droppen */
  alien.addEventListener("drop", function (event) {
    var pizza = document.querySelector(".pizza.dragging");
    pizza.classList.remove("dragging");

    if (pizza === pizza1) {
      pizza1.style.transform = "translate(0.2em, 9.5em) rotate(90deg)";
    } else if (pizza === pizza2) {
      pizza2.style.transform = "translate(2em, 22em) rotate(50deg)";
    } else if (pizza === pizza3) {
      pizza3.style.transform = "translate(1em, 30.5em) rotate(375deg)";
    } else if (pizza === pizza4) {
      pizza4.style.transform = "translate(-2em, 21em) rotate(335deg)";
    } else if (pizza === pizza5) {
      pizza5.style.transform = "translate(0em, 7em) rotate(300deg)";
    }

    numPizzasDropped++;
    if (numPizzasDropped === 5) {
      alien.src = "Home/happyalien.svg";
      console.log("alle 5 pizza's zijn gedropt");
      /*  Mission complete tekst laten zien */
      endingpizzatext.classList.remove("endingpizza");
      /*  instructie tekst verwijderen */
      dragtext.classList.add("hidedragtext");
      /*  Opnieuw beginnen */
      littlemoon.addEventListener("click", function () {
        location.reload();
      });
    }
  });
});

/* FIGHT SCHERM -----------------------------------------------------------------------*/

/* fight meter */
var fbar = document.querySelector(".fbar");
var hartmeter = document.querySelector("#hartmeter");
var alienfight = document.querySelector(".alienfight");
var abar = document.querySelector(".abar");
var fbuttons = document.querySelector(".fbuttons");
var fighttext = document.querySelector("#fighttext");

var fightscherm = document.querySelector(".fightscherm");
var winningastro = document.querySelector(".winning");
var fightmeter = document.querySelector(".fight");
var endingfighttext = document.querySelector(".endingfight");

/*  Kick health down---------------- */
var kick = document.querySelector(".kick");
var astrofight = document.querySelector(".astrofight");
var astrokick = document.querySelector(".astrokick");

var derdeArrayElementen = [fbuttons, alienfight, fightmeter, fighttext];

var fbarWidth = 26;
var kickCount = 0;

/*  astro default zichtbaar, kick niet */
astrofight.classList.remove("hideastrofight");
astrokick.classList.add("hid");

/*  korte animatie */
function healthdownkick() {
  astrofight.classList.add("hid");
  astrokick.classList.remove("hid");
  setTimeout(function () {
    astrokick.classList.add("hid");
  }, 400);
  setTimeout(function () {
    astrofight.classList.remove("hid");
  }, 400);

  /*  -4 gaat eraf */
  fbarWidth -= 4;
  /*  breedte wordt aangepast van fbar */
  fbar.style.width = fbarWidth + "em";

  kickCount++;
  if (kickCount >= 7) {
    console.log("Gefeliciteerd, je hebt 7 keer geklikt!");

    /*  buttons, tekst etc. verborgen */
    setTimeout(function () {
      derdeArrayElementen.forEach(function (element) {
        element.classList.add("hid");
      });
      astrofight.classList.add("hideastrofight");
      /*  winning astro zichtbaar */
      winningastro.classList.remove("hid");
      endingfighttext.classList.remove("endingfight");
      /*  Opnieuw beginnen */
      littlemoon.addEventListener("click", function () {
        location.reload();
      });
    }, 400);
  }
}

kick.addEventListener("click", healthdownkick);
console.log(kick);

/*  Hit health down---------------- */
var hit = document.querySelector(".hit");
var astrohit = document.querySelector(".astrohit");

/*  kick nog niet zichtbaar */
astrohit.classList.add("hid");

/*  korte animatie */
function healthdownhit() {
  astrohit.classList.remove("hid");
  setTimeout(function () {
    astrohit.classList.add("hid");
  }, 400);

  /*  -4 gaat eraf */
  fbarWidth -= 4;
  /*  breedte wordt aangepast van fbar */
  fbar.style.width = fbarWidth + "em";

  /*  buttons, tekst etc. verborgen */
  kickCount++;
  if (kickCount >= 7) {
    console.log("Gefeliciteerd, je hebt 7 keer geklikt!");

    setTimeout(function () {
      derdeArrayElementen.forEach(function (element) {
        element.classList.add("hid");
      });
      astrofight.classList.add("hideastrofight");
      /*  winning astro zichtbaar */
      winningastro.classList.remove("hid");
      endingfighttext.classList.remove("endingfight");
      /*  Opnieuw beginnen */
      littlemoon.addEventListener("click", function () {
        location.reload();
      });
    }, 400);
  }
}

hit.addEventListener("click", healthdownhit);

/*  Shoot health down---------------- */
var astroshoot = document.querySelector(".astroshoot");
var shoot = document.querySelector(".shoot");

/*  shoot nog niet zichtbaar */
astroshoot.classList.add("hid");

/*  korte animatie */
function healthdownshoot() {
  astrofight.classList.add("hid");
  astroshoot.classList.remove("hid");
  setTimeout(function () {
    astroshoot.classList.add("hid");
  }, 500);
  setTimeout(function () {
    astrofight.classList.remove("hid");
  }, 500);

  /*  -4 gaat eraf */
  fbarWidth -= 4;
  /*  breedte wordt aangepast van fbar */
  fbar.style.width = fbarWidth + "em";

  /*  buttons, tekst etc. verborgen */
  kickCount++;
  if (kickCount >= 7) {
    console.log("Gefeliciteerd, je hebt 7 keer geklikt!");

    setTimeout(function () {
      derdeArrayElementen.forEach(function (element) {
        element.classList.add("hid");
      });
      astrofight.classList.add("hideastrofight");
      /*  winning astro zichtbaar */
      winningastro.classList.remove("hid");
      endingfighttext.classList.remove("endingfight");
      /*  Opnieuw beginnen */
      littlemoon.addEventListener("click", function () {
        location.reload();
      });
    }, 500);
  }
}
shoot.addEventListener("click", healthdownshoot);

// Bron, regel 434: Chatopenai.
/* Random kick, hit of shoot */
var random = document.querySelector(".random");
console.log("klik op random");
var fightArrayElementen = [healthdownkick, healthdownhit, healthdownshoot];

function randomfight() {
  var randomAttack =
    fightArrayElementen[Math.floor(Math.random() * fightArrayElementen.length)];
  // Voer de gekozen functie uit
  randomAttack();
}

random.addEventListener("click", randomfight);
