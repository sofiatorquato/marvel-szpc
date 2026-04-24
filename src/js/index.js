// Seleciona todos os elementos da lista de personagens
const personagens = document.querySelectorAll('.personagem');

// Seleciona o elemento do personagem grande
const personagemGrande = document.querySelector('.personagem-grande');
const nomePersonagem = document.getElementById('nome-personagem');
const descricaoPersonagem = document.getElementById('descricao-personagem');

// Itera sobre cada personagem da lista
personagens.forEach(personagem => {
  // Adiciona o evento de mouseover a cada personagem
  personagem.addEventListener('mouseover', () => {
    // Obtém os dados do personagem atual
    const nome = personagem.getAttribute('data-name');
    const descricao = personagem.getAttribute('data-description');
    const imagemSrc = personagem.querySelector('img').getAttribute('src');
    
    // Substitui a extensão da imagem para PNG
    const imagemGrandeSrc = imagemSrc.replace('.jpg', '.png');
    
    // Atualiza a imagem, o nome e a descrição do personagem grande
    personagemGrande.setAttribute('src', imagemGrandeSrc);
    nomePersonagem.textContent = nome;
    descricaoPersonagem.textContent = descricao;
  });
});
