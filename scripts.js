const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function MostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function esconderForm(){
    form.style.left = "-350px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}