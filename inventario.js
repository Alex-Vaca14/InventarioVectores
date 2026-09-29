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
        posicion -= 1;
        this.productos.push(null);
        for(let i = this.productos.length - 1; i > posicion; i--){
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[posicion] = producto;
    }
    listar() {
        let listado = "";
        for (let i = 0; i < this.productos.length; i++) {
            listado += this.productos[i].infohtml() + "\n";
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
    listaInversa(){
        let listado = "";
        for (let i = this.productos.length - 1; i >= 0; i--) {
            listado += this.productos[i].infohtml() + "\n";
        }
        return listado;
    }
}
