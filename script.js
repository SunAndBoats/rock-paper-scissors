/*Declarar variables computerChoice humanChoice
const computerChoice;
const humanChoice;*/


/* Escribir una funcion para que la maquina elija piedra papel o tijera*/
const getComputerChoice=()=>{
    const random=Math.floor(Math.random())*3
    if(random<=1){return "Rock"}
    else if(random>1&&random<=2){return "Paper"}
    else {return "Scissors"}  
}






/* Escribir una funcion para que el humano elija piedra papel o tijera*/

/*Declarar variables para contar los puntos de maquina y humano */
/*Declarar variable para contar el número de partidas jugadas */
/* Escribir una funcion para comprobar quien de los 2 ha ganado la partida*/
/*Escribir una funcion que diga cuando uno de los 2 llega a 5 victorias */
/* */
