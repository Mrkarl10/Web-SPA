
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("home").addEventListener("click", function() {
        window.location.href = "index.html"; // Para volver al inico cuando usuario hace click en Home
    })

    document.getElementById("contacto").addEventListener("click", function() {
        window.open("contacto.html", "_blank"); // Cambiar a la pagina de registro en caso de querer contactar
    })

    document.getElementById("diseños").addEventListener("click", function() {
        window.open("diseños.html", "_blank"); // Cambiar a la pagina de diseños 
    })

    document.getElementById("shop-now").addEventListener("click", function() {
        window.open("shop.html", "_blank"); // Cambiar a la pagina de compra 
    })
})
