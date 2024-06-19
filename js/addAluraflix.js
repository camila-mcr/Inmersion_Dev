let seriesList = [];

let addButton = document.getElementById("add_button");
addButton.addEventListener("click", addSeries);


function addSeries() {
    let validity = false;
    addToSeriesList(validity);
    showList();

    //Limpiando campos
    document.getElementById("seriesImage").value = "";
    document.getElementById("seriesTitle").value = "";   
}

function validation(valid) {
    let seriesImage = document.getElementById("seriesImage");
    let seriesTitle = document.getElementById("seriesTitle");
   
    if (seriesImage.validity.valueMissing) {
        seriesImage.reportValidity();
    } else if (seriesTitle.validity.valueMissing) {
        seriesTitle.reportValidity();
    } else {
        valid = true;
    }

    return valid;
}


function addToSeriesList(valid) {
    let checkedValidation = validation(valid);
    
    let seriesImage = document.getElementById("seriesImage").value;
    let seriesTitle = document.getElementById("seriesTitle").value;
    let inTheList = false;
    
    if (checkedValidation === true) {
        for (let index = 0; index < seriesList.length; index++) {
            const element = seriesList[index];
            inTheList = element.title.includes(seriesTitle);
            if (inTheList === true) {
                break;
            }   
        }
    
        if (inTheList === false) {
            seriesList.push({id : uuid.v4(), title : `${seriesTitle}`, image : `${seriesImage}`});
        } else {
            alert("Esta serie ya fue agregada.");
        }
    }
}


function showList() {
    let seriesSection = document.getElementById("seriesSection");
    seriesSection.innerHTML = "";

    for (let index = 0; index < seriesList.length; index++) {
        const element = seriesList[index];
        
        let newSeries = newCard(element. id, element.title, element.image);
        seriesSection.appendChild(newSeries);
    }
}


function newCard(id, title, image) {
    content = `
    <span class="material-symbols-outlined delete" title="Eliminar" id="delete" data-series="${id}">cancel</span>
    <img class="series__poster" src="${image}" alt="${title} Poster">
    <p>${title}</p>
    `;

    const seriesContainer = document.createElement("div");
    seriesContainer.setAttribute("class", "series__container");
    seriesContainer.setAttribute("data-series", `${title}`);

    seriesContainer.innerHTML = content;


    //DELETE
    const deleteIcon = seriesContainer.querySelector("#delete");
    deleteIcon.addEventListener("click", (e) => {deleteSeries(e.target.dataset.series)})

    return seriesContainer;
}


function deleteSeries(data) {
    let elementIndex = "";
    let inTheList = false;

    for (let index = 0; index < seriesList.length; index++) {
        const element = seriesList[index];
        inTheList = element.id.includes(data);
        console.log("Incluye: ", inTheList);
        if (inTheList === true) {
            elementIndex = index;
            break;
        }
    }

    seriesList.splice(elementIndex, 1);
    showList();
}




//DESAFIOS

// Crear un botón para eliminar una película en la pantalla;
// Además de agregar la imagen de la película, también añadir el nombre a través de otro input;
// Guardar todas las películas añadidas en una lista/array y recorrer esa lista cada vez que quieras imprimir o eliminar la película.