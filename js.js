const quadroGame = document.querySelectorAll('[data-quadro]')
const area = document.querySelector('.area')
const btnReset = document.getElementById('reset')
const vez = document.getElementById('qualJogador')

let isX = false
let jogador = ''

reset()
function randomGame(){
  let random = Math.floor(Math.random() * 2)
  area.classList.remove('x')
  area.classList.remove('circulo')
  if(random === 0){
    isX = true
    jogador = 'X'
    area.classList.add('x')
  }else{
    isX = false
    jogador = 'O'
    area.classList.add('circulo')
  }
  rederInfo()
}

function reset(){
  quadroGame.forEach((item)=>{
    item.classList.remove('x')
    item.classList.remove('circulo')
  })
  randomGame()
}

function  marcarTela(el,classe){
  el.classList.add(classe)
}

function eventoClique(e){
  const quadro = e.target
  if(quadro.classList.contains('x') || quadro.classList.contains('circulo')){
    return;
  }
  const addClassTela = isX ? 'x': 'circulo'
  marcarTela(quadro,addClassTela)
  trocaTurno()
}

function trocaTurno(){
  isX = !isX
  area.classList.remove('circulo')
  area.classList.remove('x')
  
  if(isX){
    jogador = 'X'
    area.classList.add('x')
  }else{
    jogador = 'O'
    area.classList.add('circulo')
  }
  rederInfo()
}

function rederInfo(){
  vez.innerText = jogador
}

quadroGame.forEach((item)=>{
  item.addEventListener('click',eventoClique)
})
btnReset.addEventListener('click',reset)
