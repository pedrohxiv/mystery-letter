function classeAleatoria() {
  const cartaMisteriosa = document.querySelectorAll('span');
  const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  const grupoTamanho = ['medium', 'big', 'reallybig'];
  const grupoRotacao = ['rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewright'];
  const classeEstilo = Math.floor(Math.random() * grupoEstilo.length);
  const classeTamanho = Math.floor(Math.random() * grupoTamanho.length);
  const classeRotacao = Math.floor(Math.random() * grupoRotacao.length);
  const classeInclinacao = Math.floor(Math.random() * grupoInclinacao.length);

  for (let i = 0; i < cartaMisteriosa.length; i += 1) {
    cartaMisteriosa[i].className = `
    ${grupoEstilo[classeEstilo]} ${grupoTamanho[classeTamanho]} 
    ${grupoRotacao[classeRotacao]} ${grupoInclinacao[classeInclinacao]}`;
  }
}

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
  classeAleatoria();
}

document.getElementById('criar-carta').addEventListener('click', gerarCarta);
