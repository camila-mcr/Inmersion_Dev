let animeList = [
    // {
    //     title : "Jujutsu Kaisen",
    //     image : "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe"
    // },
    // {
    //     title : "Naruto",
    //     image : "https://pbs.twimg.com/media/FZmkOyQXgAAS6H8.jpg",
    // },
    // {
    //     title : "The Apothecary Diaries",
    //     image : "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/af8f1de4c1b2d5345294490a45fcb22d.jpe"
    // },
    // {
    //     title : "Mashle: Magic and Muscles",
    //     image : "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=480,height=720,fit=contain,quality=85/catalog/crunchyroll/f7dfe109de592c6dd9a78dc75ec1965b.jpe"
    // },
    // {
    //     title : "Chainsaw Man",
    //     image : "https://es.web.img3.acsta.net/pictures/22/08/01/10/00/1492791.jpg"
    // },
    {
        id: "1",
        title : "Cyberpunk: Edgerunners",
        image : "https://i.ebayimg.com/images/g/g7AAAOSwLn5jTM-7/s-l1200.webp"
    }

]



let addButton = document.getElementById("add_button");
addButton.addEventListener("click", agregarPelicula);



function agregarPelicula() {

    agregarAListaAnime();
    showList();

    //Limpiando campos
    document.getElementById("pelicula").value = "";
    document.getElementById("titulo").value = "";   
}

function agregarAListaAnime() {
    console.log("ID: ", uuid.v4());
    let inputPelicula = document.getElementById("pelicula").value;
    let inputTitulo = document.getElementById("titulo").value;
    let inTheList = false;
    
    for (let index = 0; index < animeList.length; index++) {
        const element = animeList[index];
        inTheList = element.title.includes(inputTitulo);
        console.log("Incluye: ", inTheList);
        if (inTheList === true) {
            break;
        }
        
    }

    console.log("Incluye afuera: ", inTheList);

    if (inTheList === false) {
        animeList.push({id : uuid.v4(), title : `${inputTitulo}`, image : `${inputPelicula}`});
    } else {
        alert("Este anime ya está en la lista.");
    }
    console.log("anime-List: ", animeList);
}


function showList() {
    let listaPeliculas = document.getElementById("listaPeliculas");
    listaPeliculas.innerHTML = "";

    for (let index = 0; index < animeList.length; index++) {
        const element = animeList[index];
        
        let newAnime = newCard(element. id, element.title, element.image);
        listaPeliculas.appendChild(newAnime);

        console.log("lista: ", animeList[index].image);
    }
}

function newCard(id, title, image) {
    content = `
    <span class="material-symbols-outlined delete" title="Eliminar" id="delete" data-anime="${id}">cancel</span>
    <img src="${image}" alt="${title} Anime Poster">
    <p>${title}</p>
    `;

    const animeContainer = document.createElement("div");
    animeContainer.setAttribute("class", "anime__container");
    animeContainer.setAttribute("data-anime", `${title}`);

    animeContainer.innerHTML = content;


    //DELETE

    const deleteIcon = animeContainer.querySelector("#delete");
    deleteIcon.addEventListener("click", (e) => {deleteAnime(e.target.dataset.anime)})

    return animeContainer;
}



function deleteAnime(data) {
    console.log("Click");
    console.log("data", data);

    let elementIndex = "";
    let inTheList = false;

    for (let index = 0; index < animeList.length; index++) {
        const element = animeList[index];
        inTheList = element.id.includes(data);
        console.log("Incluye: ", inTheList);
        if (inTheList === true) {
            elementIndex = index;
            break;
        }
    }

    console.log("elemento a eliminar: ", elementIndex);

    animeList.splice(elementIndex, 1);
    showList();
}




//DESAFIOS

// Crear un botón para eliminar una película en la pantalla;
// Además de agregar la imagen de la película, también añadir el nombre a través de otro input;
// Guardar todas las películas añadidas en una lista/array y recorrer esa lista cada vez que quieras imprimir o eliminar la película.