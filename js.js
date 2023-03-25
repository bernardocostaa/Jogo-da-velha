const quadroGame = document.querySelectorAll('[data-quadro]')
const area = document.querySelector('.area')
const btnReset = document.getElementById('reset')

let isX = false

reset()
function randomGame(){
  let random = Math.floor(Math.random() * 2)
  area.classList.remove('x')
  area.classList.remove('circulo')
  if(random === 0){
    isX = true
    console.log('1');
    area.classList.add('x')
  }else{
    isX = false
    area.classList.add('circulo')
    console.log('2');
  }
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
    area.classList.add('x')
  }else{
    area.classList.add('circulo')
  }
}

quadroGame.forEach((item)=>{
  item.addEventListener('click',eventoClique)
})
btnReset.addEventListener('click',reset)
