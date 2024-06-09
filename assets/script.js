let img = document.querySelector("img")
let bandera = false;

img.addEventListener("click", ()=>{
    if (bandera == false){
        document.querySelector('img').style.border = "solid 2px red"
        bandera = true
    } else{
        document.querySelector('img').style.border = ""
        bandera = false
    }
})