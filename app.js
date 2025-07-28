// 1. Crie um array para armazenar os nomes
let amigos = [];

// 2. Implementar uma função para agregar os amigos
function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let nome = input.value.trim();
  
  if (nome === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }
  
  if (amigos.includes(nome)) {
    alert('Esse amigo já foi adicionado');
  } else {
    // Adiciona a lista
    amigos.push(nome);
    listaAmigos()
  }
  // Limpa campo
  input.value = '';
}

// 3. Implementar uma função para atualizar a lista de amigos
function listaAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement('li');
    item.textContent = amigos[i] + ' ';

    // Criar botão de remover
    const botaoRemover = document.createElement("button");
    botaoRemover.innerHTML = '<i class="fas fa-times-circle"></i>';
    botaoRemover.classList.add("button-remove");
    botaoRemover.onclick = () => removerAmigo(i);
    item.appendChild(botaoRemover);
    lista.appendChild(item);
  }
}

// 4. Implementar uma função para sortear os amigos
function sortearAmigo(){
  let resultado = document.getElementById('resultado');
  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];
  
  if (amigos.length === 0) {
    alert('A lista está vazia! Adicione pelo menos um amigo.');
    return;
  }

  resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
  listaAmigos()
}

//teste
function removerAmigo(index) {
  amigos.splice(index, 1);
  listaAmigos();
}
