const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botaoStar = document.querySelector('.botaoStar')
const reiciniar = document.querySelector('.reiniciar')





const jump = ()=> {

    mario.classList.add('jump'); 

    setTimeout( ()=>{

        mario.classList.remove('jump'); 

    },500);

}

const loop = setInterval(() =>{

   const pipePosition = pipe.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
   //console.log(marioPosition)

   if(pipePosition < 120 && pipePosition > 0 && marioPosition < 80 ) {

    pipe.style.animation = 'nome'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'nome'
    mario.style.bottom = `${marioPosition}px`
    mario.src = 'img/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'


    setTimeout( ()=>{

        reiciniar.classList.remove('hide');
        pipe.classList.remove('inimacaoCano');

    },500);

    setTimeout(loop)
  
  

   } 

});

botaoStar.addEventListener('click', () => {

    pipe.classList.remove('posicaoInicialcano');
    pipe.classList.add('inimacaoCano');
    botaoStar.classList.add('hide');


});

reiciniar.addEventListener('click', ()=>{


});

document.addEventListener('keydown', jump);