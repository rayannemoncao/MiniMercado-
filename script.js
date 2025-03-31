document.addEventListener('DOMContentLoaded', function () {
    const estrelas = document.querySelectorAll('.estrela');
    const notaDisplay = document.getElementById('nota-display');
    const notaInput = document.getElementById('nota');
  
    // Função para atualizar as estrelas com base na nota
    function atualizarEstrelas(valor) {
      estrelas.forEach(star => {
        const valorEstrela = parseInt(star.getAttribute('data-value'));
        if (valorEstrela <= valor) {
          star.classList.add('text-warning'); // Preenche a estrela
          star.classList.remove('bi-star'); // Remove a estrela vazia
          star.classList.add('bi-star-fill'); // Adiciona a estrela preenchida
        } else {
          star.classList.remove('text-warning'); // Remove a cor de preenchimento
          star.classList.remove('bi-star-fill'); // Remove a estrela preenchida
          star.classList.add('bi-star'); // Deixa a estrela vazia
        }
      });
    }
  
    // Evento de clique nas estrelas para selecionar a nota
    estrelas.forEach(estrela => {
      estrela.addEventListener('click', function() {
        const valor = this.getAttribute('data-value');
        notaInput.value = valor; // Atualiza o valor da nota no campo oculto
        notaDisplay.textContent = valor; // Exibe a nota selecionada no display
        atualizarEstrelas(valor); // Atualiza as estrelas destacadas
      });
  
      // Evento de mouseover para destacar as estrelas ao passar o mouse
      estrela.addEventListener('mouseover', function() {
        const valor = this.getAttribute('data-value');
        atualizarEstrelas(valor); // Destaca as estrelas até o valor do mouseover
      });
  
      // Evento de mouseout para restaurar o destaque das estrelas, se não houver clique
      estrela.addEventListener('mouseout', function() {
        const valor = notaInput.value; // Usa a nota armazenada, não o mouseover
        atualizarEstrelas(valor); // Restaura o destaque conforme a nota selecionada
      });
    });
  });
  
  // Função para exibir ou ocultar o formulário de dados do cartão
function toggleCartaoForm() {
    var cartaoForm = document.getElementById('cartaoForm');
    var cartaoSelected = document.getElementById('cartao').checked;

    // Mostra o formulário se "Cartão de Crédito/Débito" for selecionado
    if (cartaoSelected) {
        cartaoForm.style.display = 'block';
    } else {
        cartaoForm.style.display = 'none';
    }
}

// Chama a função ao carregar a página para verificar a seleção inicial
window.onload = function() {
    toggleCartaoForm();
};
