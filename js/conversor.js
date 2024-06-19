// Obteniendo los campos necesarios
const amountCurrency = document.getElementById("amount_currency");

const fromCurrency = document.getElementById("from_currency");

const toCurrency = document.getElementById("to_currency");

const convertButton = document.getElementById("convert_button");

const resultCurrency = document.getElementById("result_currency");

const bitcoinCurrency = document.getElementById("result_bitcoin");


// Array de monedas
const currencies = [
    euro = {
        currency : "Euro",
        code : "EUR",
        value : 0.00024, 
        Symbol : "€"
    },
    dolar = {
        currency : "Dolar",
        code : "USD",
        value : 0.00026, 
        Symbol : "$"
    },
    libra = {
        currency : "Libra Esterlina",
        code : "GBP",
        value : 0.00021, 
        Symbol : "£"
    },
    bitcoin = {
        currency : "Bitcoin",
        code : "BTC",
        value : 0.0000000039965036, 
        Symbol : "₿"
    }
]


// Creando las opciones del select con las modenas del arreglo

currencies.forEach(element => {
    // let newOption = `<option value="${element}">${element}</option>`;
    // toCurrency.innerHTML = newOption;
    const newOption = document.createElement("option");
    newOption.setAttribute("value", element.currency);
    newOption.innerText = element.code;
    toCurrency.appendChild(newOption);
});

// Función de conversión
convertButton.addEventListener("click", convert);

function convert() {
    console.log("Click");
    console.log("pesos", amountCurrency.value)
    console.log("to: ", toCurrency);
    console.log("bit", currencies[3]);

    
    
    console.log(toCurrency.value)
    console.log(currencies)

    currencies.find(currency => {
        if (currency.currency == toCurrency.value) {
            let formula = parseInt(amountCurrency.value) * currency.value;
            resultCurrency.innerText = formula.toFixed(2) + currency.Symbol;
            resultCurrency.style.visibility = "visible";
            console.log("result: ", formula)
            
            if (currency.currency !== "Bitcoin") {
                let formula = parseInt(amountCurrency.value) * currencies[3].value;
                bitcoinCurrency.innerText = formula.toFixed(2) + currencies[3].Symbol;
                bitcoinCurrency.style.visibility = "visible";
                console.log("result: ", formula)
            }
        }

    })


}



//DESAFIO

// Agregar otras monedas para convertir;
// Conversor de temperaturas entre fahrenheit, kelvin y celsius;
// Agregar en el alert el nombre de la persona que está pidiendo la conversión;
// Agregar una línea al proyecto desarrollado para que aparezca el valor en bitcoin.