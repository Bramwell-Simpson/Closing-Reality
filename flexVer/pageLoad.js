import anime from './anime.es.js';

// el name - disclaimer (flashing lights etc)
// el name - mainPage (main screen obvs)

const disclaimerPage = document.getElementById("disclaimer");
const mainPage = document.getElementById("mainPage");

disclaimerPage.classList.toggle("is-hidden");
mainPage.classList.toggle("is-hidden");


if(sessionStorage.getItem("disclaimer") != "yes") {
    anime({
        targets: "#disclaimer",
        delay: 3500,
        opacity: [100, 0],
        easing: 'easeInOutQuad',
        /*begin: () => {
            disclaimer("#mainPage");
            disclaimer("#disclaimer");
        }, */
        complete: () => {
    
            anime({
                targets: "#mainPage",
                opacity: [0, 100],
                easing: 'easeInOutQuad'
            })
    
            disclaimerPage.classList.toggle("is-hidden");
            mainPage.classList.toggle("is-hidden");
    
            sessionStorage.setItem("disclaimer", "yes")
        }
    });
}
else {
    disclaimerPage.classList.toggle("is-hidden");
    mainPage.classList.toggle("is-hidden");
}
