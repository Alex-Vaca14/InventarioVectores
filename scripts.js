let Nombre = document.getElementById("txNom");
let Codigo = document.getElementById("txCode");
let Cantidad = document.getElementById("txCant");
let Costo = document.getElementById("txPrec");
let inventario = new Inventario();
let resultado = document.getElementById("resultado");
const div = document.getElementById("listado");

function limpiarCampos(){
    document.getElementById("txNom").value = "";
    document.getElementById("txCode").value = "";
    document.getElementById("txCant").value = "";
    document.getElementById("txPrec").value = "";
    document.getElementById("listado").innerHTML = "";
}

const btnAdd=document.getElementById("btnAgregar");
btnAdd.addEventListener("click", () => {
    let producto = new Producto(Codigo.value, Nombre.value, Cantidad.value, Costo.value);
    inventario.agregar(producto);
    alert("Producto agregado correctamente.");
    limpiarCampos();
})

const btnSrc=document.getElementById("btnBuscar");
btnSrc.addEventListener("click", () => {
    let codigo = Codigo.value;
    let producto = inventario.buscar(codigo);
    if (producto) {
        div.innerHTML = producto.infohtml();
    } else {
        alert("Producto no encontrado.");
    }
})
    
const btnDlt=document.getElementById("btnEliminar");
btnDlt.addEventListener("click", () => {
    let codigo = Codigo.value;
    let eliminado = inventario.eliminar(codigo);
    if (eliminado) {
        alert("Producto eliminado correctamente.");
    } else {
        alert("Producto no encontrado.");
    }
    limpiarCampos();
})

const btnInsrt=document.getElementById("btnInsertar");
btnInsrt.addEventListener("click", () => {
    let producto = new Producto(Codigo.value, Nombre.value, Cantidad.value, Costo.value);
    let posicion = parseInt(prompt("Ingrese la posición donde desea insertar el producto:"));
    if (posicion >= 1 && posicion <= inventario.productos.length + 1) {
        inventario.insertar(producto, posicion);
        alert("Producto insertado correctamente.");
    } else {
        alert("Posición inválida.");
    }
    limpiarCampos();
})

const btnMost=document.getElementById("btnMostrar");
btnMost.addEventListener("click", () => {
    let listado = inventario.listar();
    if (listado) {
        div.innerHTML = listado;
    } else {
        div.innerHTML = "No hay productos en el inventario.";
    }
})

const btnExp=document.getElementById("btnExPrimero");
btnExp.addEventListener("click", () => {
    let producto = inventario.extraerPrimero();
    if (producto) {
        div.innerHTML = `Producto extraído: ${producto.infohtml()}`;
    } else {
        div.innerHTML = "No hay productos en el inventario.";
    }
})

const btnAddi=document.getElementById("btnAddInicio");
btnAddi.addEventListener("click", () => {
    let producto = new Producto(Codigo.value, Nombre.value, Cantidad.value, Costo.value);
    inventario.agregarInicio(producto);
    alert("Producto agregado correctamente.");
    limpiarCampos();
})

const btnMosti=document.getElementById("btnMostrarInverso");
btnMosti.addEventListener("click", () => {
    let listado = inventario.listaInversa();
    if (listado) {
        div.innerHTML = listado;
    } else {
        div.innerHTML = "No hay productos en el inventario.";
    }
})

const btnCln=document.getElementById("btnLimpiar");
btnCln.addEventListener("click", () => {
    limpiarCampos();
})