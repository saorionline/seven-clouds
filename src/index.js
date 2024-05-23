/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

//Web API
// Conectar Server

window.fetch(`${baseUrl}/api/avo`)
// Procesar Respuesta y Convertir a JSON
.then((respuesta) => respuesta.json())

// JSON --> Data --> Cargar Navegador
.then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item)=>{
        //Crear Imagen
        const image = document.createElement("img");
        // Llamar imágenes
        image.src = `${baseUrl}${item.image}`;
        
        // Crear Título
        const title = document.createElement("h2");
        //Etiquetar fruta
        title.textContent = item.name;

        // Crear Precio
        const price = document.createElement("div");
        // Llamar Precio
        price.textContent = item.price;

        const container = document.createElement("div");
        container.append(image, title, price);

        allItems.push(container);
    });
    document.body.append(...allItems);
});