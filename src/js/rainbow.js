import anime from './anime.es.js';

const element = document.getElementById('rainbowEmail');

element.addEventListener("mouseover",function(){
    rainbowTour("#rainbowEmail", true);
});

element.addEventListener("mouseout",function(){
    rainbowTour("#rainbowEmail", false);
});

function rainbowTour(div, trigger){
    if(trigger){
      anime({
        targets: div,
        backgroundColor: ['#000000', '#ff7219', '#19ff91', '#4865ff', '#ff48ce', '#ffffff'],
        color: ['#ffffff', '#000000'],
        easing: 'linear',
        delay: anime.stagger(20),
        duration: 300
      });
    }
  
    if(!trigger){
      anime.remove(div);
      anime({
        targets: div,
        backgroundColor: ['#ffffff', '#000000'],
        color: ['#000000', '#ffffff'],
        easing: 'linear',
        duration: 300,
      });
    }
}