const button = document.getElementById('button');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

const buttonValid = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    return window.alert('Olá, Tryber!');
  }
  return window.alert('Email ou senha inválidos.');
};

button.addEventListener('click', buttonValid);

textarea.addEventListener('keyup', () => {
  const caracteres = textarea.value.length;
  const resto = 500 - caracteres;
  counter.textContent = resto;
});

const valid = () => {
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.toggleAttribute('disabled');
};

const agreement = document.getElementById('agreement');
agreement.addEventListener('change', valid);

// Submit form

const submitBtn = document.getElementById('submit-btn');

let familyResult = '';
let avaliation = '';
const contentArray = [];
const nameValue = document.getElementById('input-name').value;
const lastName = document.getElementById('input-lastname').value;
const house = document.getElementById('house').value;
const family = document.querySelectorAll('input[name=family]');
const content = document.querySelectorAll('.subject');
const avaliationForm = document.querySelectorAll('input[name=rate]');
const commentaryInput = document.getElementById('textarea');

const checkedFamily = () => {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      familyResult = family[i].value;
    }
  }
};

const checkedContent = () => {
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked) {
      contentArray.push(content[i].value);
    }
  }
};

const checkedAvaliation = () => {
  for (let i = 0; i < avaliationForm.length; i += 1) {
    if (avaliationForm[i].checked) {
      avaliation = avaliationForm[i].value;
    }
  }
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  checkedContent();
  checkedFamily();
  checkedAvaliation();

  document.querySelector('.name').innerHTML = `${nameValue} ${lastName}`;
  document.querySelector('.house').innerHTML = `Casa: ${house}`;
  document.querySelector('.family').innerHTML = `Familia: ${familyResult}`;
  document.querySelector('.content').innerHTML = `Conteudo: ${contentArray.join(', ')}`;
  document.querySelector('.avaliation').innerHTML = `Avaliação: ${avaliation}`;
  document.querySelector('.commentary').innerText = `Comentario: ${commentaryInput.value}`;

  document.getElementById('evaluation-form').style.display = 'none';
});
