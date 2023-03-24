const quadroGame = document.querySelectorAll('[data-quadro]')
const area = document.querySelector('.area')
const btnReset = document.getElementById('reset')

let isX = false

function reset(){

}

function  marcarTela(el,classe){
  el.classList.add(classe)
}

function eventoClique(e){
  const quadro = e.target
  const addClassTela = isX ? 'x': 'circulo'

  marcarTela(quadro,addClassTela)

  trocaTurno()
}

function trocaTurno(){
  isX = !isX
  console.log(isX);
  area.classList.remove('circulo')
  area.classList.remove('x')
  
  if(isX){
    area.classList.add('x')
  }else{
    area.classList.add('circulo')

  }
}

quadroGame.forEach((item)=>{
  item.addEventListener('click',eventoClique, {once:true})
})
btnReset.addEventListener('click',reset)
