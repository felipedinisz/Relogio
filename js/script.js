
const resultado = document.querySelector("#result");

function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,

  });
}

setInterval(() => {
  resultado.innerHTML = mostraHora()
}, 1000)





