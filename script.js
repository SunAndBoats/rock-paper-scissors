/*Declarar variables computerChoice humanChoice*/
const computerScore=0;
const humanScoregit =0;


/* Escribir una funcion para que la maquina elija piedra papel o tijera*/

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    
    if (random === 0) {
        return "Rock";
    } else if (random === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

console.log(getComputerChoice())

/* Escribir una funcion para que el humano elija piedra papel o tijera*/

const getHumanChoice = () => {
    // Pedir al usuario una opción y normalizar el texto (mayúsculas/minúsculas)
    const choice = prompt("Choose Rock, Paper, or Scissors:").trim().toLowerCase();
    
    // Convertir la primera letra en mayúscula para que coincida con el formato esperado
    return choice.charAt(0).toUpperCase() + choice.slice(1);
};

// Prueba la función mostrando el resultado en la consola
console.log(getHumanChoice());


/*Declarar variables para contar los puntos de maquina y humano */
/*Declarar variable para contar el número de partidas jugadas */
/* Escribir una funcion para comprobar quien de los 2 ha ganado la partida*/
/*Escribir una funcion que diga cuando uno de los 2 llega a 5 victorias */
/* */
