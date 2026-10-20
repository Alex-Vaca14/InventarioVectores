class Nodo {
    constructor(producto) {
        this.producto = producto;
        this.anterior = null;
        this.siguiente = null;
    }
}

class Inventario {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.cantidad = 0;
    }

    agregar(producto) {
        const nuevo = new Nodo(producto);
        const codigoProducto = String(producto.codigo);

        if (this.primero === null || String(this.primero.producto.codigo) > codigoProducto) {
            nuevo.siguiente = this.primero;
            if (this.primero !== null) {
                this.primero.anterior = nuevo;
            } else {
                this.ultimo = nuevo;
            }
            this.primero = nuevo;
            this.cantidad++;
            return;
        }

        let actual = this.primero;

        while (actual.siguiente !== null && String(actual.siguiente.producto.codigo) <= codigoProducto) {
            actual = actual.siguiente;
        }

        nuevo.siguiente = actual.siguiente;
        nuevo.anterior = actual;
        if (actual.siguiente !== null) {
            actual.siguiente.anterior = nuevo;
        } else {
            this.ultimo = nuevo;
        }
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

        while (actual !== null) {
            if (String(actual.producto.codigo) === codigoBuscado) {
                if (actual.anterior === null) {
                    this.primero = actual.siguiente;
                } else {
                    actual.anterior.siguiente = actual.siguiente;
                }

                if (actual.siguiente === null) {
                    this.ultimo = actual.anterior;
                } else {
                    actual.siguiente.anterior = actual.anterior;
                }

                this.cantidad--;
                return true;
            }

            actual = actual.siguiente;
        }

        return false;
    }

    insertar(producto, posicion) {
        const indice = Number(posicion) - 1;

        if (!Number.isInteger(indice) || indice < 0 || indice > this.cantidad) {
            return false;
        }

        const nuevo = new Nodo(producto);

        if (indice === 0) {
            nuevo.siguiente = this.primero;
            if (this.primero !== null) {
                this.primero.anterior = nuevo;
            } else {
                this.ultimo = nuevo;
            }
            this.primero = nuevo;
        } else if (indice === this.cantidad) {
            nuevo.anterior = this.ultimo;
            this.ultimo.siguiente = nuevo;
            this.ultimo = nuevo;
        } else {
            let actual = this.primero;

            if (indice <= this.cantidad / 2) {
                for (let i = 0; i < indice; i++) {
                    actual = actual.siguiente;
                }
            } else {
                actual = this.ultimo;
                for (let i = this.cantidad - 1; i > indice; i--) {
                    actual = actual.anterior;
                }
            }

            nuevo.siguiente = actual;
            nuevo.anterior = actual.anterior;
            actual.anterior.siguiente = nuevo;
            actual.anterior = nuevo;
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
            if (this.primero !== null) {
                this.primero.anterior = null;
            } else {
                this.ultimo = null;
            }
            this.cantidad--;
            return primero;
        }

        return null;
    }

    agregarInicio(producto) {
        const nuevo = new Nodo(producto);
        nuevo.siguiente = this.primero;
        if (this.primero !== null) {
            this.primero.anterior = nuevo;
        } else {
            this.ultimo = nuevo;
        }
        this.primero = nuevo;
        this.cantidad++;
    }

    listaInversa() {
        let listado = "";
        let actual = this.ultimo;

        while (actual !== null) {
            listado += actual.producto.infohtml() + "\n";
            actual = actual.anterior;
        }

        return listado;
    }
}