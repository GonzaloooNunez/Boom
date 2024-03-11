const userInput = document.getElementById("userInput");
const countDown = document.getElementById("countdown");
let valorCuentaAtras = 5;

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const result = document.getElementById("result");
    result.innerText = "";

    const text = document.createElement("p");
    countDown.appendChild(text);

    let cuentaAtras = setInterval(() => {
      if (valorCuentaAtras >= 0) {
        text.innerHTML = `Cuenta atrás: ${valorCuentaAtras} segundos`;
        valorCuentaAtras--;
      } else {
        clearInterval(cuentaAtras);
        valorCuentaAtras = 5;
      }
    }, 1000);

    const operacion = function (tiempo) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const numero = Math.floor(Math.random() * 3) + 1;
          resolve(numero);
        }, tiempo);
      });
    };

    operacion(6500).then((num) => {
      const text2 = document.createElement("p");

      if (parseInt(userInput.value) === num) {
        text2.innerHTML =
          `Tu elegiste el numero ` +
          userInput.value +
          ` y acertaste, por lo que HAS SALVADO AL MUNDO`;
      } else {
        text2.innerHTML =
          `Tu elegiste el numero ` +
          userInput.value +
          ` y debía ser el numero ` +
          num +
          `, por lo que TODOS MORIREMOS`;
      }
      result.appendChild(text2);
    });
  }
});

let restart = document.getElementById("restart");

restart.addEventListener("click", function () {
  clearInterval(valorCuentaAtras);
  valorCuentaAtras = 5;
  countDown.innerHTML = "";
  result.innerHTML = "";
});
