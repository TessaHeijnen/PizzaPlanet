
/* Tekst + button Home */
var maintext = document.querySelector (".maintext");
var letsgobutton = document.querySelector (".letsgobutton");

/* planten + astro eet pizza Home */
var backgrounddefault = document.querySelector ("#backgrounddefault");
var blueplanet = document.querySelector ("#blueplanet");
var redplanet = document.querySelector ("#redplanet");
var moon = document.querySelector ("#moon");
var miniufo = document.querySelector ("#miniufo");
var saturnus = document.querySelector ("#saturnus");
var earth = document.querySelector ("#earth");
var astropizza = document.querySelector ("#astropizza");
var arrayElementen = [blueplanet, redplanet, saturnus, earth, letsgobutton, astropizza,];
console.log(blueplanet); //kan deze weg nu?

/* Stardust scherm */
var metertotaal = document.querySelector (".meter");
var ster = document.querySelectorAll(".star");
var astrofly = document.querySelector (".astrofly");

/* sterren verdwijnen */
var starround1 = document.querySelector ("#starround1");
var starround2 = document.querySelector ("#starround2");
var starround3 = document.querySelector ("#starround3");
var starround4 = document.querySelector ("#starround4");
var starround5 = document.querySelector ("#starround5");
var starround6 = document.querySelector ("#starround6");
var star1 = document.querySelector ("#star1");
var star2 = document.querySelector ("#star2");
var star3 = document.querySelector ("#star3");
var star4 = document.querySelector ("#star4");

starround1.addEventListener("click", function() {
    starround1.style.display = "none";
});
starround2.addEventListener("click", function() {
    starround2.style.display = "none";
});
starround3.addEventListener("click", function() {
    starround3.style.display = "none";
});
starround4.addEventListener("click", function() {
    starround4.style.display = "none";
});
starround5.addEventListener("click", function() {
    starround5.style.display = "none";
});
starround6.addEventListener("click", function() {
    starround6.style.display = "none";
});
star1.addEventListener("click", function() {
    star1.style.display = "none";
});
star2.addEventListener("click", function() {
    star2.style.display = "none";
});
star3.addEventListener("click", function() {
    star3.style.display = "none";
});
star4.addEventListener("click", function() {
    star4.style.display = "none";
});


/* Tekst home */
setTimeout(function (){
    maintext.innerText = 'I Deliver Pizzas every lightyear,' 
}, 2000)

setTimeout(function (){
    maintext.innerText = 'so i can say hello to my alien bestfriends' 
}, 4000)

setTimeout(function (){
    maintext.innerText = 'Soooo, wanna go on an adventure with me???';
    letsgobutton.classList.remove("hideplanets")
}, 6500)



/* Bye alle planeten */
letsgobutton.addEventListener("click", function(){
    arrayElementen.forEach(element => {
        element.classList.add('hideplanets');
    });
/* Hello stardust scherm elementen */    
    ster.forEach(element => {
        element.classList.remove('showstar');
      });
    metertotaal.classList.remove("showmeter");
    astrofly.classList.remove("showastrofly");
    maintext.innerText = '';
})


/* Astro eet pizza */
var astrostill = document.querySelector ("#astropizza");
var astrostatus = 'uit';

function lichtknop(){

    if (astrostatus == 'aan'){
        astrostill.src = 'home/astro.png'
        astrostatus = 'uit'
    }

    else if (astrostatus == 'uit'){
        astrostill.src = 'home/astro.gif';
        astrostatus = 'aan'
    }
}

astrostill.addEventListener("mouseover", lichtknop);


/* Stardust meter */
var bar = document.querySelector(".bar");
var starmeter = document.querySelector("#starmeter");
var stardusttext = document.querySelector("h2");

function steromhoog(){
    bar.style.height = bar.offsetHeight + 57.5 + "px";
    starmeter.style.height = starmeter.offsetHeight + 125 + "px";
    console.log ("steromhoog + 100")

    if (starmeter.offsetHeight >= 1300) {
        stardusttext.classList.remove("stardusttext");

        setTimeout(function (){
            maintext.innerText = 'I Deliver Pizzas every lightyear,' 
            stardusttext.classList.add("stardusttext")
        }, 2000)

        setTimeout(function (){
            maintext.innerText = 'so i can say hello to my alien bestfriends' 
        }, 4000)
    }
}

ster.forEach(element => {
    element.addEventListener ('click', steromhoog);})
