const inputNumber = document.getElementById("input_number");
const numberReveal = document.getElementById("number_reveal");
const guessButton = document.getElementById("guess_button");
const guessAttempt = document.getElementById("guess_attempt");
const resetButton = document.getElementById("reset_button");
const guessLimitMsg = document.getElementById("guess_limit");

guessButton.addEventListener("click", guess);
resetButton.addEventListener("click", reset);
guessLimitMsg.style.display = "none";


let secretNumber = parseInt(Math.random()*100 + 1);
let guessLimit = 3;
let guessCount = 0;

function guess() {
    guessCount++;
    guessLimit--;
    console.log("intentos: ", guessCount);
    let number = parseInt(inputNumber.value);
    console.log(secretNumber);


    if (guessLimit > 0) {
        
        console.log("Menos", guessLimit);
        // if (guessLimit == 0) {
        //     inputNumber.setAttribute("disabled", true);
        //     guessLimitMsg.style.display = "block";
        // }

        if (secretNumber == number) {
            numberReveal.innerText = "Haz adivinado el número secreto,";
            guessAttempt.innerText = `en ${guessCount} intentos.`
            console.log("intentos: ", guessCount);
        } else if (secretNumber > number) {
            numberReveal.innerText = `Número incorrecto, el número secreto es mayor que ${number}.`;
        } else if (secretNumber < number) {
            numberReveal.innerText = `Número incorrecto, el número secreto es menor que ${number}.`;
        }


    } else {
        inputNumber.setAttribute("disabled", true);
        guessLimitMsg.style.display = "block";
    }

    
    

    // if (secretNumber == number) {
    //     numberReveal.innerText = "Haz adivinado el número secreto,";
    //     guessAttempt.innerText = `en ${guessCount} intentos.`
    //     console.log("intentos: ", guessCount);
    // } else if (secretNumber > number) {
    //     numberReveal.innerText = `Número incorrecto, el número secreto es mayor que ${number}.`;
    // } else if (secretNumber < number) {
    //     numberReveal.innerText = `Número incorrecto, el número secreto es menor que ${number}.`;
    // }
   
    

    inputNumber.value = "";
    inputNumber.focus();
}

function reset() {
    console.log("Reset");
    guessCount = 0;
    guessLimit = 3;
    numberReveal.innerText = "";
    guessAttempt.innerText = "";
    inputNumber.removeAttribute("disabled");
    guessLimitMsg.style.display = "none";
    inputNumber.focus();
    console.log("intento", guessCount)
}




// while (secretNumber != numeroIngresado) {
//     var numeroIngresado = prompt("Ingresa un número entre 1 y 100.");
//     console.log(secretNumber);

//     if (secretNumber == numeroIngresado) {
//         alert("Haz adivinado el número secreto.");
//     } else if (secretNumber > numeroIngresado) {
//         alert(`Número incorrecto, el número secreto es mayor que ${numeroIngresado}.`);
//     } else if (secretNumber < numeroIngresado) {
//         alert(`Número incorrecto, el número secreto es menor que ${numeroIngresado}.`);
//     };
// }






//DESAFIOS

// Agregar un número de intentos para que la persona intente acertar e imprimir la respuesta al final;
// Cuando la persona se equivoque, incluir el número que fue digitado en el mensaje de error e informar en el mensaje si el número digitado es mayor o menor que el número secreto;
// Descubrir el número máximo que una persona lleva para adivinar un número correcto;
// Investigar y aprender la diferencia entre == y ===.