const main = document.getElementById("main");

// let anime = [
//     jujutsu_kaisen = "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe",
//     naruto = "https://pbs.twimg.com/media/FZmkOyQXgAAS6H8.jpg",
//     the_apothecary_diaries = "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/af8f1de4c1b2d5345294490a45fcb22d.jpe",
//     mashle = "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/f7dfe109de592c6dd9a78dc75ec1965b.jpe"
// ]

let animeList = [
    jujutsu_kaisen = {
        title : "Jujutsu Kaisen",
        image : "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe",
        opening : "https://www.youtube.com/watch?v=5yb2N3pnztU",
        trailer : "https://www.youtube.com/watch?v=PKHQuQF1S8k"
    },
    naruto = {
        title : "Naruto",
        image : "https://pbs.twimg.com/media/FZmkOyQXgAAS6H8.jpg",
        opening : "https://www.youtube.com/watch?v=RiQrbSuLrsU",
        trailer : "https://www.youtube.com/watch?v=QczGoCmX-pI"
    },
    the_apothecary_diaries = {
        title : "The Apothecary Diaries",
        image : "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/af8f1de4c1b2d5345294490a45fcb22d.jpe",
        opening : "https://www.youtube.com/watch?v=z9JZB08qy44",
        trailer : "https://www.youtube.com/watch?v=XYNGkSvFT8c"
    },
    mashle = {
        title : "Mashle: Magic and Muscles",
        image : "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/f7dfe109de592c6dd9a78dc75ec1965b.jpe",
        opening : "https://www.youtube.com/watch?v=210R0ozmLwg",
        trailer : "https://www.youtube.com/watch?v=Al0Zin6iVCE"
    },
    chainsaw_man = {
        title : "Chainsaw Man",
        image : "https://es.web.img3.acsta.net/pictures/22/08/01/10/00/1492791.jpg",
        opening : "https://www.youtube.com/watch?v=dFlDRhvM4L0",
        trailer : "https://www.youtube.com/watch?v=l96zmDlWCBk"
    },
    cyberpunk = {
        title : "Cyberpunk: Edgerunners",
        image : "https://i.ebayimg.com/images/g/g7AAAOSwLn5jTM-7/s-l1200.webp",
        opening : "https://www.youtube.com/watch?v=OifiVCnFKzM",
        trailer : "https://www.youtube.com/watch?v=x4ztgjvfU60"
    }
]

for (let index = 0; index < animeList.length; index++) {
    const element = animeList[index];
    
    let newAnime = newCard(element.title, element.image, element.trailer, element.opening);
    main.appendChild(newAnime);

    console.log("lista: ", animeList[index].image);
}

function newCard(title, image, trailer, opening) {
    content = `
    <img class="anime__poster" src="${image}" alt="${title} Anime Poster" title="${title}">
    <p>${title}</p>
    <div class="anime__links">
        <a href="${trailer}" target="_blank">
            <img src="../assets/images/trailer.png" alt="Ver trailer" title="Ver Trailer">
        </a>
        <a href="${opening}" target="_blank">
            <img src="../assets/images/opening.png" alt="Ver opening" title="Ver Opening">
        </a>
    </div>
    `;

    const animeContainer = document.createElement("div");
    animeContainer.setAttribute("class", "anime__container");

    animeContainer.innerHTML = content;

    return animeContainer;
}



//DESAFIOS
// Elige tu tema favorito para adaptar a nuestro código, es decir, en lugar de películas, puede ser una lista de animes, cómics, cursos, capas de juegos, entre otros;
// Intenta implementar otras versiones de la estructura de repetición que hicimos con for, como por ejemplo cambiar el for por el while;
// Crear una segunda lista para agregar los nombres de las películas abajo de las imágenes;
// Crea una condición para no agregar películas repetidas, en caso de que ya hayan sido agregadas anteriormente;
// Crea un campo y un botón para agregar la imagen a través de la pantalla, y no directamente en el código.