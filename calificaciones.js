/*Ejercicio 2: Clasificación de Calificaciones
Descripción:
Crea un programa que tome una calificación numérica (0-100) como entrada y muestre el correspondiente grado de letra basado en la siguiente escala:

90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
0-59: "F"
Recomendación: Utiliza la estructura if, else if, else.*/

let number = 40;

if (number >= 90 && number <= 100) {
    console.log("A");
} else if (number >= 80 && number <= 89) {
    console.log("B");
} else if (number >= 70 && number <= 79) {  
    console.log("C");
} else if (number >= 60 && number <= 69) {  
    console.log("D");
} else if ( number >= 0 && number <=59){
    console.log("F");
}else {
    console.log("Calificacion invalida");
}


