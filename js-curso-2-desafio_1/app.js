const titulo = document.querySelector("h1");
const botaoConsole = document.getElementById("botaoConsole");
const botaoAlert = document.getElementById("botaoAlert");
const botaoPrompt = document.getElementById("botaoPrompt");
const botaoSoma = document.getElementById("botaoSoma");

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
titulo.innerHTML = "Hora do Desafio";

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function exibirMensagem() {
  console.log("O botão foi clicado");
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function exibirAlerta() {
  alert("Eu amo JS");
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function exibirPrompt() {
  let cidade = prompt("Digite o nome de uma cidade do Brasil");
  alert(`Estive em ${cidade} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function exibirSoma() {
  let n1 = parseInt(prompt("Digite o primeiro número"));
  let n2 = parseInt(prompt("Digite o segundo número"));
  let resultadoSoma = n1 + n2;
  alert(`O resultado da soma foi: ${resultadoSoma}`);
}

botaoConsole.addEventListener("click", exibirMensagem);
botaoAlert.addEventListener("click", exibirAlerta);
botaoPrompt.addEventListener("click", exibirPrompt);
botaoSoma.addEventListener("click", exibirSoma);
