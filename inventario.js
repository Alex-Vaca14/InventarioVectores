/* ESTRUCTURAS DE DATOS
Se va a controlar un inventario de productos, de los que se guarda el código, nombre, cantidad y 
costo, utilizando un arreglo. Podremos agregar, buscar por código, eliminar por código, insertar 
un producto en una posición, recuperar el listado como texto, extraer el primer elemento 
(devolverlo y eliminarlo), agregar al inicio (un nuevo)
En la clase Producto agregar un metodo info() que devuelva como texto la información del producto */
class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    info() {
        return `Código: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Costo: ${this.costo}`;
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }
    agregar(producto) {
        this.productos.push(producto);
    }
    buscar(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === codigo) {
                return this.productos[i];
            }
        }
        return null;
    }
    eliminar(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === codigo) {
                for (let j = i; j < this.productos.length - 1; j++) {
                    this.productos[j] = this.productos[j + 1];
                }
                this.productos.pop();
                return true;
            }
        }
        return false;
    }
    insertar(producto, posicion) {
        this.productos.push(producto);
        posicion = this.productos.length - 1;
        for (let i = this.productos.length - 1; i > posicion; i--) {
            this.productos[i] = this.productos[i - 1];
        }
    }
    listar() {
        let listado = "";
        for (let i = 0; i < this.productos.length; i++) {
            listado += this.productos[i].info() + "\n";
        }
        return listado;
    }
    extraerPrimero() {
        if (this.productos.length > 0) {
            let primero = this.productos[0];
            for (let i = 0; i < this.productos.length - 1; i++) {
                this.productos[i] = this.productos[i + 1];
            }
            this.productos.pop();
            return primero;
        }
        return null;
    }
    agregarInicio(producto) {
        this.productos.push(producto);
        for (let i = this.productos.length - 1; i > 0; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[0] = producto;
    }
}

let inventario=new Inventario();
let nuevo=new Producto(1,"Lapiz",100,10); //hay 100 y cuestan 20
inventario.agregar(nuevo);
nuevo=new Producto(2,"Borrador",200,20); 
inventario.agregar(nuevo);
nuevo=new Producto(3,"Cuaderno",300,30);
inventario.agregar(nuevo);
nuevo=new Producto(4,"Clips",20,10); 
inventario.agregarInicio(nuevo);
nuevo=new Producto(5,"Sacapuntas",500,50); 
inventario.agregar(nuevo);

console.log(inventario.listar())

inventario.eliminar(3);

console.log(inventario.listar())

let res=inventario.buscar(10);
if (res==null)
  console.log("No existe");
else
  console.log("si existe");

res=inventario.buscar(4);
if (res==null)
  console.log("No existe");
else
  console.log(res.info());

res=inventario.extraerPrimero();
console.log("el primero es");
console.log(res.info());