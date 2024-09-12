export default function slide(){
    
}

const containerImg = document.querySelectorAll('[data-container="img"]')
const textDescricao = document.querySelectorAll('[data-text="descricao"]')
const btn = document.querySelector('[data-btn="btn"]')
let contador = 0 
let contadorText = 0

console.log(textDescricao)

containerImg[contador].classList.add("mostrar")
textDescricao[contadorText].classList.add("amostrar")


function remover(){
    containerImg.forEach(elemento =>{
        elemento.classList.remove("mostrar")
    })
    textDescricao.forEach(elemento =>{
        elemento.classList.remove("amostrar")
    })
}

function click(){
    remover()
    if(contador >= containerImg.length - 1){
        contador = 0
    }else{
        contador++
        contadorText++
    }
    if(contadorText >= textDescricao.length - 1){
        contadorText = 0
    }else{
        contadorText++
    }
    containerImg[contador].classList.add("mostrar")
    textDescricao[contadorText].classList.add("amostrar")
}



btn.addEventListener("click", click)