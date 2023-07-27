function askProducts(){
    alert('Por favor ingrese cual producto desea comprar, para salir ingrese: 0')
    let seleccionarProductos = Number(prompt("1: T-Shirt $150\n2: Gorra NY $100\n3: Anorak $194\n4: Hoodie JumpMan $120"))
    let seleccionarCantidad;
    let total = 0;
    
    const cantidad = (cant, precio) => {
        return cant * precio
    }

    while (seleccionarProductos != 0) {
        switch (seleccionarProductos) {
            case 1:
                seleccionarCantidad= Number(prompt("Selecciono Jersey Nike T-Shirt, indique la cantidad:"))
                total += cantidad(seleccionarCantidad, 150)
                break;
            case 2:
                seleccionarCantidad = Number(prompt("Selecciono New York Cap Accessory, indique la cantidad:"))
                total += cantidad(seleccionarCantidad, 100)
                break;
            case 3:
                seleccionarCantidad = Number(prompt("Selecciono Anorak Jordan Why Not, indique la cantidad:"))
                total += cantidad(seleccionarCantidad, 194)
                break;
            case 4:
                seleccionarCantidad = Number(prompt("Selecciono Hoodie Jordan JumpMan, indique la cantidad:"))
                total += cantidad(seleccionarCantidad, 120)
            break;
        default:
        break;
        }
        seleccionarProductos = Number(prompt("1: T-Shirt $150\n2: Gorra NY $100\n3: Anorak $194\n4: Hoodie JumpMan $120"))
    }

const metodoDePago = () => {
    let metodo = prompt("Ingrese el metodo de pago, tarjeta o efectivo" )
    if (metodo == "tarjeta") {
        total *= 1.1
        alert("El total es:" + total)
    }else if ( metodo == "efectivo") {
        total -= 10
        alert("Tenes un descuento de 10, el total es:" + total)
    }
}

metodoDePago()

}

document.getElementById("ask").addEventListener("click", askProducts);