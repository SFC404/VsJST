// Seleccionamos los botones de categorías
const botonesCategoria = document.querySelectorAll(".categoria");

// Seleccionamos todos los productos
const productos = document.querySelectorAll(".producto");


// Recorremos todos los botones
botonesCategoria.forEach(boton => {

    boton.addEventListener("click", () => {

        // Quitamos "activa" de todos los botones
        botonesCategoria.forEach(btn => {
            btn.classList.remove("activa");
        });

        // Ponemos "activa" al botón seleccionado
        boton.classList.add("activa");

        // Obtenemos la categoría seleccionada
        const categoriaSeleccionada = boton.dataset.categoria;


        // Recorremos todos los productos
        productos.forEach(producto => {

            const categoriaProducto = producto.dataset.categoria;

            // Si seleccionamos "todos"
            if (categoriaSeleccionada === "todos") {

                producto.style.display = "block";

            }

            // Si la categoría del producto coincide
            else if (categoriaProducto === categoriaSeleccionada) {

                producto.style.display = "block";

            }

            // Si no coincide, ocultamos el producto
            else {

                producto.style.display = "none";

            }

        });

    });

});