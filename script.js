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
    cartaMisteriosa[i].classList.toggle(grupoEstilo[classeEstilo]);
    cartaMisteriosa[i].classList.toggle(grupoTamanho[classeTamanho]);
    cartaMisteriosa[i].classList.toggle(grupoRotacao[classeRotacao]);
    cartaMisteriosa[i].classList.toggle(grupoInclinacao[classeInclinacao]);
  }
}

function palavraEspecifica(event) {
  const eventTarget = event.target;
  const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  const grupoTamanho = ['medium', 'big', 'reallybig'];
  const grupoRotacao = ['rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewright'];
  const classeEstilo = Math.floor(Math.random() * grupoEstilo.length);
  const classeTamanho = Math.floor(Math.random() * grupoTamanho.length);
  const classeRotacao = Math.floor(Math.random() * grupoRotacao.length);
  const classeInclinacao = Math.floor(Math.random() * grupoInclinacao.length);

  eventTarget.className = '';
  eventTarget.classList.toggle(grupoEstilo[classeEstilo]);
  eventTarget.classList.toggle(grupoTamanho[classeTamanho]);
  eventTarget.classList.toggle(grupoRotacao[classeRotacao]);
  eventTarget.classList.toggle(grupoInclinacao[classeInclinacao]);
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
document
  .getElementById('carta-gerada')
  .addEventListener('click', palavraEspecifica);
