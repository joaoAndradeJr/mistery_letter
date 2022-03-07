function createTextElement(array) {
  const p = document.querySelector('#carta-gerada');

  while (p.firstChild) {
    p.removeChild(p.firstChild);
  }

  for (let index = 0; index < array.length; index += 1) {
    const span = document.createElement('span');
    span.innerHTML = `${array[index]}`;
    p.appendChild(span);
  }
}

function getLetterText() {
  const text = document.querySelector('#carta-texto').value;
  document.querySelector('#carta-texto').value = '';
  createTextElement(text.split(' '));
}

const createLetterBtn = document.querySelector('#criar-carta');
createLetterBtn.addEventListener('click', () => getLetterText());
