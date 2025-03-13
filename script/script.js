const nomeProduto = document.querySelector("#nameP");
const qtd = document.querySelector("#qtd");
const preco = document.querySelector("#preco");
const btn = document.querySelector("#btn");

const ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  criarProduto();
  apagar();
});

function criarProduto() {
  const produto = {
    Produto: `${nomeProduto.value}`,
    Quantidade: `${qtd.value}`,
    Preço: `${preco.value}`,
  };
  addProduto();
}

function apagar() {
  nomeProduto.value = "";
  qtd.value = "";
  preco.value = "";
}

function addProduto() {
  if (nomeProduto.value.trim() == "" && preco.value.trim() == "" && qtd.value.trim() == "")
    return console.log("Sem Caracteres");
  const prod = document.createElement("li");
  ul.appendChild(prod);
  prod.textContent = ` ${qtd.value}  ${nomeProduto.value} $ ${preco.value}`;
  prod.classList.add("box");
  nomeProduto.value = "";
}
