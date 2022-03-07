function createTextElement(array) {
  const p = document.querySelector('#carta-gerada');
  if (array.length === 0 || array[0] === '') {
    p.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = `${array[index]}`;
      p.appendChild(span);
    }
  }
}

function cleanChilds() {
  const p = document.querySelector('#carta-gerada');
  while (p.firstChild) {
    p.removeChild(p.firstChild);
  }
}

function getLetterText() {
  const text = document.querySelector('#carta-texto').value;
  cleanChilds();
  createTextElement(text.split(' '));
}

const createLetterBtn = document.querySelector('#criar-carta');
createLetterBtn.addEventListener('click', () => getLetterText());
