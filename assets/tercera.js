document.querySelector("#ingresar").addEventListener('click', () => {
  let select1 = document.querySelector("#select1").value;
  let select2 = document.querySelector("#select2").value;
  let select3 = document.querySelector("#select3").value;

  let password = select1 + select2 + select3;


  if (password === "911") {
    document.querySelector("#resultado").innerHTML = "password 1 correcto";
  } else if (password === "714") {
    document.querySelector("#resultado").innerHTML = "password 2 es correcto";
  } else {
    document.querySelector("#resultado").innerHTML = "password incorrecto";
  }
});
