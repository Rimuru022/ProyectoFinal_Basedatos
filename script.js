document.addEventListener('DOMContentLoaded', function () {
    console.log("Contenido cargado");
})

const input1 = document.querySelector('.form_container_input_usuario');
const button1 = document.querySelector('.form_container_send');

if (button1) {
    console.log("Elemento encontrado");
    button1.addEventListener("click", () => {
        console.log("Click en el botón");
    });
} else {
    console.log("Elemento no encontrado");
}

if (input1) {
    console.log("input1 encontrado");
    input1.addEventListener("input", () => {
        var label=document.querySelector("#label_user")
        label.textContent=input1.value
    });
} else {
    console.log("input1 no encontrado");
}
