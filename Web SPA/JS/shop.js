let productList = []

const objProducts ={
    id: "",
    nombre: "",
    unidad: "",
    talla: "",
    color: ""
}

let editeForm = false

const form = document.getElementById("formulario")
const nameInput = document.getElementById("nombre-producto")
const unidadInput = document.getElementById("unidad-producto")
const tallaInput = document.getElementById("talla-producto")
const colorInput = document.getElementById("color-producto")
const addButton = document.getElementById("add-button")

form.addEventListener("submit", validateFormuler)

function validateFormuler(e){
    e.preventDefault()

    if(nameInput.value === "" || unidadInput.value === "" || tallaInput.value === "" || colorInput.value === ""){
        alert("¡Debe llenar todos los campos!")
        showProducts() = false
    }
    
    if(editeForm){
        editeProducts()
        editeForm = false
    } 
    else{
        objProducts.id = Date.now()
        objProducts.nombre = nameInput.value
        objProducts.unidad = unidadInput.value
        objProducts.talla = tallaInput.value
        objProducts.color = colorInput.value

        addProducts()
    }
}

function addProducts(){
    productList.push({...objProducts})

    showProducts()

    form.reset()

    cleanObjects()
}

function cleanObjects(){
    objProducts.id = ""
    objProducts.nombre = ""
    objProducts.unidad = ""
    objProducts.talla =  ""
    objProducts.color= ""
}

function showProducts(){

    limpiarHtlm()

    const divproducts = document.querySelector(".productos")

    productList.forEach(producto => {
        const{id, nombre, unidad, talla, color} = producto

        const parrafo = document.createElement("p")
        parrafo.textContent = `${id} - Tipo: ${nombre} - unidad: ${unidad} - Talla: ${talla} - color: ${color}`;
        parrafo.dataset.id = id

        const editeButton = document.createElement("button")
        editeButton.onclick = () => cargarProductos(producto)
        editeButton.textContent = "Editar"
        editeButton.classList.add("btn", "edite-button")
        parrafo.append(editeButton)

        const deleteButton = document.createElement("button")
        deleteButton.onclick = () => deleteProducts(id)
        deleteButton.textContent = "Eliminar"
        deleteButton.classList.add("btn", "delete-button")
        parrafo.append(deleteButton)

        const hr = document.createElement("hr")

        divproducts.appendChild(parrafo)
        divproducts.appendChild(hr)

    })

}

function cargarProductos(producto){
    const {id, nombre, unidad, talla, color} = producto

    nameInput.value = nombre
    unidadInput.value = unidad
    tallaInput.value = talla
    colorInput.value = color
    objProducts.id = id

    form.querySelector('button[type="submit"]').textContent = "Actualizar"
    editeForm = true
}


function editeProducts(){
    objProducts.nombre = nameInput.value
    objProducts.unidad = unidadInput.value
    objProducts.talla = tallaInput.value
    objProducts.color = colorInput.value

    productList.map(producto =>{
        if(producto.id === objProducts.id){
            producto.id = objProducts.id
            producto.nombre = objProducts.nombre
            producto.unidad = objProducts.unidad
            producto.talla = objProducts.talla
            producto.color = objProducts.color         
        }
    })
    limpiarHtlm()
    showProducts()
    form.reset()

    form.querySelector('button[type=["submit"]').textContent = "Agregar"
    editeForm = false
}


function deleteProducts(id){
    console.log("Delete product with id:", id);
    productList = productList.filter(producto => producto.id !== id)

    limpiarHtlm()
    showProducts()

}


function limpiarHtlm(){
    const divproducts = document.querySelector(".productos")
    while(divproducts.firstChild){
        divproducts.removeChild(divproducts.firstChild)
    }
}
