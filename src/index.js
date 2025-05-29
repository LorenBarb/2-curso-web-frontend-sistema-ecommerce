// Define os produtos disponíveis com seus nomes e preços
const produtos = {
  camisa: { nome: "Camisa", preco: 50 },
  calca: { nome: "Calça", preco: 100 },
  sapato: { nome: "Sapato", preco: 150 },
  bone: { nome: "Boné", preco: 25 }
};

// Carrinho de compras: começa vazio e será preenchido com os itens
let carrinho = [];

/**
 * Função chamada ao clicar em "Adicionar"
 * Adiciona o produto escolhido ao carrinho, somando se já existir
 */
function adicionarAoCarrinho() {
  const produtoSelecionado = document.getElementById("produto").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);

  // Validação: quantidade deve ser positiva
  if (quantidade < 1) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  const produto = produtos[produtoSelecionado];

  // Verifica se esse item já está no carrinho
  const itemExistente = carrinho.find(item => item.nome === produto.nome);

  if (itemExistente) {
    // Se já existe, atualiza a quantidade e subtotal
    itemExistente.quantidade += quantidade;
    itemExistente.subtotal = itemExistente.quantidade * itemExistente.preco;
  } else {
    // Se é novo, adiciona ao array do carrinho
    carrinho.push({
      nome: produto.nome,
      preco: produto.preco,
      quantidade: quantidade,
      subtotal: produto.preco * quantidade
    });
  }

  alert(`${produto.nome} adicionado ao carrinho!`);
}

/**
 * Mostra os itens do carrinho no HTML
 * Exibe nome, preço, quantidade e o total geral
 */
function mostrarCarrinho() {
  const divCarrinho = document.getElementById("carrinho");
  divCarrinho.innerHTML = ""; // Limpa a área antes de mostrar os dados

  if (carrinho.length === 0) {
    divCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
    return;
  }

  let total = 0;

  // Para cada item no carrinho, cria um parágrafo com suas infos
  carrinho.forEach(item => {
    divCarrinho.innerHTML += `
      <p>
        <strong>${item.nome}</strong> - R$${item.preco} × ${item.quantidade}
        = <strong>R$${item.subtotal}</strong>
      </p>
    `;
    total += item.subtotal;
  });

  // Exibe o total da compra
  divCarrinho.innerHTML += `<h3>Total: R$${total}</h3>`;
}
