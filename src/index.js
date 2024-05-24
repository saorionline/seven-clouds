/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const mountNode = document.getElementById("js-mount");
//Web API
// Conectar Server
const formatPrice = (price) =>
    new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);

!(async function () {
    const response = await fetch(`${baseUrl}/api/avo`);
// More about Scread in (Mozilla > Operators>Spread syntax )
    const {data: allAvos} = await response.json();
//HTML Nodes for each avocado from the API
    const nodeArray = allAvos.map((avocado) => {
        //Crear Imagen
        const image = document.createElement("img");
       
        // Llamar imágenes
        image.src = `${baseUrl}${avocado.image}`;
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        // Crear Título
        const title = document.createElement("h2");
        //Etiquetar fruta
        title.className = "text-lg";
        title.textContent = avocado.name;
        // Crear Precio
        const price = document.createElement("div");
        price.className = ("text-gray-600");
        // Llamar Precio
        price.textContent = formatPrice(avocado.price);

        const priceAndTitle = document.createElement("div");
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        const card = document.createElement("div");
        card.className = "md-flex bg-white rounded-lg p-6 hover:bg-gray-300";
        card.appendChild(image);
        card.appendChild(priceAndTitle);

        return card;
    });
mountNode.append(...nodeArray);
})();