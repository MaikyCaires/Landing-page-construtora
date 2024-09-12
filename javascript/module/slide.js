export default function slide() {
  const containerImg = document.querySelectorAll('[data-container="img"]');
  const textDescricao = document.querySelectorAll('[data-text="descricao"]');
  const btnLeft = document.querySelector('[data-btn="left"]');
  const btnRight = document.querySelector('[data-btn="right"]');
  const itemColor = document.querySelectorAll('[data-item="color"]');
  let contador = 0;
  let contadorText = 0;

  console.log(textDescricao);

  containerImg[contador].classList.add("mostrar");
  textDescricao[contadorText].classList.add("amostrar");
  itemColor[contador].classList.add("item-cor-ativa");

  function remover() {
    containerImg.forEach((elemento) => {
      elemento.classList.remove("mostrar");
    });
    textDescricao.forEach((elemento) => {
      elemento.classList.remove("amostrar");
    });
    itemColor.forEach((elemento) => {
      elemento.classList.remove("item-cor-ativa");
    });
  }

  function click() {
    // função click para frente
    remover();
    if (contador >= containerImg.length - 1) {
      contador = 0;
    } else {
      contador++;
    }
    if (contadorText >= textDescricao.length - 1) {
      contadorText = 0;
    } else {
      contadorText++;
    }

    containerImg[contador].classList.add("mostrar");
    textDescricao[contadorText].classList.add("amostrar");
    itemColor[contador].classList.add("item-cor-ativa");
  }

  function clickVoltar() {
    // função click para voltar
    remover();
    if (contador < 1) {
      contador = 5;
    } else {
      contador--;
    }
    if (contadorText < 1) {
      contadorText = textDescricao.length - 1;
    } else {
      contadorText--;
    }
    containerImg[contador].classList.add("mostrar");
    textDescricao[contadorText].classList.add("amostrar");
    itemColor[contador].classList.add("item-cor-ativa");
  }

  btnLeft.addEventListener("click", click);
  btnRight.addEventListener("click", clickVoltar);
}
