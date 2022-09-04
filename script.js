function gerarCarta() {
  const cartaTexto = document.getElementById('carta-texto');
  const cartaGerada = document.getElementById('carta-gerada');
  const frase = cartaTexto.value.split(' ');
  if (cartaTexto.value.trim().length <= 0) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    cartaGerada.innerText = '';
    for (let i = 0; i < frase.length; i += 1) {
      cartaGerada.appendChild(document.createElement('span')).innerText = frase[i];
    }
  }
}

document.getElementById('criar-carta').addEventListener('click', gerarCarta);
