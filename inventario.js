class Nodo {
    constructor(producto) {
        this.producto = producto;
        this.siguiente = null;
    }
}

class Inventario {
    constructor() {
        this.primero = null;
        this.cantidad = 0;
    }

    agregar(producto) {
        const nuevo = new Nodo(producto);
        const codigoProducto = String(producto.codigo);

        if (this.primero === null ||
            String(this.primero.producto.codigo) > codigoProducto) {
            nuevo.siguiente = this.primero;
            this.primero = nuevo;
            this.cantidad++;
            return;
        }

        let actual = this.primero;

        while (actual.siguiente !== null &&
               String(actual.siguiente.producto.codigo) <= codigoProducto) {
            actual = actual.siguiente;
        }

        nuevo.siguiente = actual.siguiente;
        actual.siguiente = nuevo;
        this.cantidad++;
    }

    buscar(codigo) {
        const codigoBuscado = String(codigo);
        let actual = this.primero;

        while (actual !== null) {
            const codigoActual = String(actual.producto.codigo);

            if (codigoActual === codigoBuscado) {
                return actual.producto;
            }

            actual = actual.siguiente;
        }

        return null;
    }

    eliminar(codigo) {
        const codigoBuscado = String(codigo);
        let actual = this.primero;
        let anterior = null;

        while (actual !== null) {
            if (String(actual.producto.codigo) === codigoBuscado) {
                if (anterior === null) {
                    this.primero = actual.siguiente;
                } else {
                    anterior.siguiente = actual.siguiente;
                }

                this.cantidad--;
                return true;
            }

            anterior = actual;
            actual = actual.siguiente;
        }

        return false;
    }

    insertar(producto, posicion) {
        const indice = Number(posicion) - 1;

        if (Number.isNaN(indice) || indice < 0 || indice > this.cantidad) {
            return false;
        }

        const nuevo = new Nodo(producto);

        if (indice === 0) {
            nuevo.siguiente = this.primero;
            this.primero = nuevo;
        } else {
            let actual = this.primero;

            for (let i = 0; i < indice - 1; i++) {
                actual = actual.siguiente;
            }

            nuevo.siguiente = actual.siguiente;
            actual.siguiente = nuevo;
        }

        this.cantidad++;
        return true;
    }

    listar() {
        let listado = "";
        let actual = this.primero;

        while (actual !== null) {
            listado += actual.producto.infohtml() + "\n";
            actual = actual.siguiente;
        }

        return listado;
    }

    extraerPrimero() {
        if (this.primero !== null) {
            let primero = this.primero.producto;
            this.primero = this.primero.siguiente;
            this.cantidad--;
            return primero;
        }

        return null;
    }

    agregarInicio(producto) {
        const nuevo = new Nodo(producto);
        nuevo.siguiente = this.primero;
        this.primero = nuevo;
        this.cantidad++;
    }

    listaInversa() {
        let listado = "";
        let actual = this.primero;
        let productos = [];

        while (actual !== null) {
            productos.push(actual.producto);
            actual = actual.siguiente;
        }

        while (productos.length > 0) {
            listado += productos.pop().infohtml() + "\n";
        }

        return listado;
    }
}