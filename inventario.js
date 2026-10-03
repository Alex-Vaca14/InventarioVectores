class Inventario {
    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        let posicion = this.productos.length;
        const codigoProducto = String(producto.codigo);

        while (posicion > 0 && String(this.productos[posicion - 1].codigo) > codigoProducto) {
            posicion--;
        }
        this.productos.push(producto);
        for (let i = this.productos.length - 1; i > posicion; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[posicion] = producto;
    }

    buscar(codigo) {
        let inicio = 0;
        let fin = this.productos.length - 1;
        const codigoBuscado = String(codigo);

        while (inicio <= fin) {
            let mitad = Math.floor((inicio + fin) / 2);
            let codigoActual = String(this.productos[mitad].codigo);

            if (codigoActual === codigoBuscado) {
                return this.productos[mitad];
            } else if (codigoBuscado < codigoActual) {
                fin = mitad - 1;
            } else {
                inicio = mitad + 1;
            }
        }
        return null;
    }

    eliminar(codigo) {
        const codigoBuscado = String(codigo);

        for (let i = 0; i < this.productos.length; i++) {
            if (String(this.productos[i].codigo) === codigoBuscado) {
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
        const indice = Number(posicion) - 1;

        if (Number.isNaN(indice) || indice < 0 || indice > this.productos.length) {
            return false;
        }

        this.productos.push(null);

        for (let i = this.productos.length - 1; i > indice; i--) {
            this.productos[i] = this.productos[i - 1];
        }

        this.productos[indice] = producto;
        return true;
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

    listaInversa() {
        let listado = "";
        for (let i = this.productos.length - 1; i >= 0; i--) {
            listado += this.productos[i].infohtml() + "\n";
        }
        return listado;
    }
}