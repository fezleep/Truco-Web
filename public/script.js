console.log("Truco Web iniciado!");

// Definindo o baralho
const naipes = ['♦️', '♠️', '♣️', '♥️'];
const valores = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];

let baralho = [];

// Gerando o baralho
function criarBaralho() {
  baralho = [];
  for (let naipe of naipes) {
    for (let valor of valores) {
      baralho.push(`${valor}${naipe}`);
    }
  }
}


// Embaralhando
criarBaralho();
console.log("Baralho criado:", baralho);

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

embaralhar(baralho);
console.log("Baralho embaralhado:", baralho);

//Distruindo as cartas
// Distribuir 3 cartas para cada jogador
let maoJogador1 = baralho.splice(0, 3);
let maoJogador2 = baralho.splice(0, 3);

console.log("Jogador 1:", maoJogador1);
console.log("Jogador 2:", maoJogador2);



// função pra exibir no HTML:

function exibirCartas(mao, elementoId) {
  const container = document.querySelector(`#${elementoId} .cartas`);
  container.innerHTML = "";
  mao.forEach(carta => {
    const cartaDiv = document.createElement("div");
    cartaDiv.textContent = carta;
    cartaDiv.style.padding = "10px";
    cartaDiv.style.margin = "5px";
    cartaDiv.style.border = "1px solid #fff";
    cartaDiv.style.borderRadius = "8px";
    cartaDiv.style.backgroundColor = "#fff";
    cartaDiv.style.color = "#000";
    container.appendChild(cartaDiv);
  });
}

exibirCartas(maoJogador1, "jogador-1");
exibirCartas(maoJogador2, "jogador-2");


