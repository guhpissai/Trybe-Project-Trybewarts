const button = document.getElementById('button');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

const buttonValid = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
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
  console.log('ok');
};

const agreement = document.getElementById('agreement');
agreement.addEventListener('change', valid);
