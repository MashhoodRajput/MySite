var datawelcome = document.querySelector('[data-welcome]');
let dataW = datawelcome.innerHTML;
datawelcome.innerHTML = "";

 for(i=0; i<dataW.length; i++){
     var span = document.createElement('span');
     span.innerHTML = dataW.charAt(i);
    datawelcome.appendChild(span);
 }


let char = 0;

function start(){
let timer  = setInterval(function(){
let datawelcomeSpan = document.querySelectorAll('[data-welcome] span')[char];
    datawelcomeSpan.classList.add('nameAnimationWelcome')
    datawelcomeSpan.style.animationDelay = char * .2 +'s';
   datawelcomeSpan.style.animationDuration = 1 +'s';
    char++;
        if(char >= 29){
            clearInterval(timer);
            setTimeout(complete, 10000 )
                   }
},50)
}
function complete(){

    let comp = setInterval(completeInterval, 50);

    let char2 = char-1;
    function completeInterval(){
    let datawelcomeSpan = document.querySelectorAll('[data-welcome] span')[char2];
         datawelcomeSpan.classList.remove('nameAnimationWelcome');
        datawelcomeSpan.classList.add('nameAnimationWelcomeWhite');
    char2--;
      if(char2 < 0){

        clearInterval(comp);
          char = 0;
     setTimeout(start, 1000 )
    }
        }

}
start();



