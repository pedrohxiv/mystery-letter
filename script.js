function gerarCarta() {
  const cartaGerada = document.getElementById('carta-gerada');
  const frase = document.getElementById('carta-texto').value.split(' ');
  cartaGerada.innerText = '';
  for (let i = 0; i < frase.length; i += 1) {
    cartaGerada.appendChild(document.createElement('span')).innerText = frase[i];
  }
}

document.getElementById('criar-carta').addEventListener('click', gerarCarta);
