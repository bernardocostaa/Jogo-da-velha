const quadroGame = document.querySelectorAll("[data-quadro]");
const area = document.querySelector(".area");
const btnReset = document.getElementById("reset");
const btnNewGame = document.getElementById("newGame");
const vez = document.getElementById("qualJogador");
const modal = document.querySelector(".modal-cont");

let isX = false;
let jogador = "";
const tabelaWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

reset();
function randomGame() {
  let random = Math.floor(Math.random() * 2);
  area.classList.remove("x");
  area.classList.remove("circulo");
  if (random === 0) {
    isX = true;
    jogador = "X";
    area.classList.add("x");
  } else {
    isX = false;
    jogador = "O";
    area.classList.add("circulo");
  }
  rederInfo();
}

function reset() {
  quadroGame.forEach((item) => {
    item.classList.remove("x");
    item.classList.remove("circulo");
  });
  randomGame();
}

function marcarTela(el, classe) {
  el.classList.add(classe);
}

function eventoClique(e) {
  const quadro = e.target;
  const addClassTela = isX ? "x" : "circulo";
  if (quadro.classList.contains("x") || quadro.classList.contains("circulo")) {
    return;
  }
  marcarTela(quadro, addClassTela);

  const ganhou = checkWin(addClassTela);
  const empate = checkEmpate()
  if (ganhou) {
    fimDeJogo(false)
  }else if(empate){
    fimDeJogo(true)
  }else{
    trocaTurno();
  }
}

function trocaTurno() {
  isX = !isX;
  area.classList.remove("circulo");
  area.classList.remove("x");

  if (isX) {
    jogador = "X";
    area.classList.add("x");
  } else {
    jogador = "O";
    area.classList.add("circulo");
  }
  rederInfo();
}

function rederInfo() {
  vez.innerText = jogador;
}

function checkWin(jogadorNoMomento) {
  return tabelaWin.some((conbinacao) => {
    return conbinacao.every((index) => {
      return quadroGame[index].classList.contains(jogadorNoMomento);
    });
  });
}
function checkEmpate(){
  return [...quadroGame].every((item)=>{
   return item.classList.contains('x') ||  item.classList.contains('circulo')
  })
}

function fimDeJogo(empate) {
  const finalMsg = document.querySelector('.finalMsg')
  if (empate) {
    finalMsg.innerText = 'Empate!';
  }else{
    finalMsg.innerText = isX ? 'X venceu!' : 'O venceu!'
  }
  modal.classList.add('ativo')
}

quadroGame.forEach((item) => {
  item.addEventListener("click", eventoClique);
});
btnReset.addEventListener("click", reset);
btnNewGame.addEventListener("click", () => {
  modal.classList.remove("ativo");
  reset();
});
