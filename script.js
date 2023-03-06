const menu = document.querySelector(".menu")
const itens = document.querySelector(".itens")
const header = document.querySelector("header")

menu.addEventListener("click", abrirMenu)

function abrirMenu(){
    if(itens.style.display == "flex"){
        itens.style.display  = "none"
        header.style.height = "150px"
    }
    else{
        itens.style.display = "flex"
        header.style.height = "350px"
    }
}