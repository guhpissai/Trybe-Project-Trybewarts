const button = document.getElementById("button");

const buttonValid = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "tryber@teste.com" & password === "123456") {
    window.alert("Olá, Tryber!")
  } else {
    window.alert("Email ou senha inválidos.")
  }
}

button.addEventListener("click", buttonValid);