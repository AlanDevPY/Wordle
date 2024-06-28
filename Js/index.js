// Definición de Variables Globales:

// intentos: Inicializa el número de intentos permitidos a 6.
// palabraSecreta: Define la palabra que el usuario debe adivinar, en este caso "APPLE".
// Escucha de Evento load:

// Se agrega un event listener al objeto window para que ejecute la función init cuando la página se cargue por completo.
// Función init:

// Se define la función init que se ejecutará al cargar la página.
// Dentro de init, se obtiene el botón con el id guess-button y se le agrega un event listener para que llame a la función intentar cuando se haga clic en el botón.
// Función intentar:

// Dentro de intentar, se llama a la función leerIntento para obtener el intento del usuario.
// Se verifica si el intento es igual a la palabraSecreta. Si es correcto, se muestra el mensaje de "¡GANASTE!" y se termina el juego.
// Se verifica si el intento está vacío. Si es así, se muestra un mensaje pidiendo que se ingresen datos.
// Comparación de Letras:

// Si el intento no es correcto y no está vacío, se procede a comparar cada letra del intento con las letras de la palabraSecreta.
// Creación de Elementos para Mostrar Resultados:

// Se obtiene el contenedor de la cuadrícula (grid) y se crea una nueva fila (ROW) con la clase row.
// Comparación de Letras y Colores:

//! Para cada letra en la palabraSecreta, se crea un elemento span con la clase letter.
//!Se compara la letra del intento con la letra correspondiente en palabraSecreta:
//! Verde si la letra y la posición son correctas.
//! Amarillo si la letra está en la palabra pero en la posición incorrecta.
//! Gris si la letra no está en la palabra.
//! Se añade el span a la fila (ROW).
//! Actualización de la Interfaz:

// Se añade la fila (ROW) al contenedor de la cuadrícula (GRID).
// Reducción de Intentos:

// Se disminuye el número de intentos restantes.
// Si los intentos llegan a 0, se muestra un mensaje de "¡PERDISTE!" y se termina el juego.
// Funciones Auxiliares:

// leerIntento: Obtiene el valor del input (guess-input), lo convierte a mayúsculas y lo devuelve.
// terminar: Desactiva el input y el botón, y muestra un mensaje en el contenedor de resultados (guesses).

let intentos = 6; // Número de intentos permitidos
let palabraSecreta = "APPLE"; // Palabra a adivinar
let contenedor = document.getElementById('guesses'); // Contenedor de resultados
let palabras = ['apple','casas','dados','lindo','carne','centro'] // Palabras para adivinar
palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase(); // obtenemos palabras aleotorias

console.log(palabraSecreta);

// Ejecutar la función `init` cuando se carga la página
window.addEventListener('load', init);

function init() {
    // Obtener el botón y agregarle un evento de click que llama a la función `intentar`
    const button = document.getElementById("guess-button");
    button.addEventListener("click", intentar);
    
    // Función que se ejecuta cuando el usuario intenta adivinar la palabra
    function intentar() {
        contenedor.innerHTML = "<h1></h1>"; // Mostrar el mensaje
        // Leer el intento del usuario
        const INTENTO = leerIntento();
        console.log(INTENTO);

        // Verificar si el intento es correcto
       
         if (INTENTO.length !== 5) {
            contenedor.innerHTML = "<h1>Favor Ingrese 5 Letras!😀</h1>"; // Mostrar el mensaje
            return;
        }
        

        // Obtener el contenedor de la cuadrícula y crear una nueva fila
        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';

        // Comparar cada letra del intento con la palabra
        for (let i in palabraSecreta) {
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            if (INTENTO[i] === palabraSecreta[i]) { // Letra correcta en la posición correcta (verde)
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'green';
            } else if (palabraSecreta.includes(INTENTO[i])) { // Letra correcta en la posición incorrecta (amarillo)
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'yellow';
            } else { // Letra incorrecta (gris)
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = 'grey';
            }
            ROW.appendChild(SPAN); // Añadir el span a la fila
        }


        GRID.appendChild(ROW); // Añadir la fila a la cuadrícula

        if (INTENTO === palabraSecreta) {
            console.log("GANASTE!");
            terminar("<h1>GANASTE!😀</h1>");
            return; //  de la función si el usuario gana
        }// salir el juego

        intentos--; // Reducir el número de intentos restantes
        if (intentos === 0) {
            console.log("PERDISTE!");
            terminar("<h1>PERDISTE!😖</h1>");
        }
    }

    // Función para leer el intento del usuario
    function leerIntento() {
        let intento = document.getElementById("guess-input").value; // Obtener el valor del input
        intento = intento.toUpperCase(); // Convertir a mayúsculas
        return intento; // Devolver el intento
    }

    // Función para terminar el juego, mostrando un mensaje y desactivando las entradas
    function terminar(mensaje) {
        const INPUT = document.getElementById("guess-input");
        const BOTON = document.getElementById("guess-button");
        INPUT.disabled = true; // Desactivar el input
        BOTON.disabled = true; // Desactivar el botón
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje; // Mostrar el mensaje
    }
  

}



