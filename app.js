function changeBackgroundColor() {
    const backgroundColor = prompt("Ingrese un color de fondo para la web");
    document.body.style.backgroundColor = backgroundColor;
  }
    changeBackgroundColor();
  

  function registerBrothers() {
    // Paso 1: Debemos saber la cantidad de hermanos
    const brotherQuantity = Number(prompt("Ingrese la cantidad de hermanos"));
    // Paso 2: Creamos un arreglo vacio donde vamos a agregar los nombres de los hermanos
    const brothers = [];
  
    // Paso 3: Crear una variable counter para ir contando la cantidad de veces que ejecutamos el while
    let counter = 0;
  
    // Paso 4: Creamos un while usando la condición de counter < brotherQuantity
    while (counter < brotherQuantity) {
      // Paso 5: Preguntamos al usuario el nombre del hermano
      const brotherName = prompt("Ingresa el nombre de tu hermano " + counter);
      // Paso 6: Agregamos el nombre del hermano al arreglo de nombres
      brothers.push(brotherName);
      // Paso 7: Aumentamos en 1 a counter
      counter++;
    }
    // Paso 8: Mostrar el resultado final con todos los nombres registrados en un alert
        alert("Los nombres de tus hermanos son: " + brothers.join(", "));
    // Paso 8: Mostramos en consola el valor del arreglo de hermanos
    // Llamamos a la función para ejecutarla
    //registerBrothers();
    console.log(brothers);
  }
  
  function generarColorHex() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function generateBlocks() {
    const blocksNumber = Number(prompt("Ingrese la cantidad de bloques que desea dibujar:")
    );
  
    let counter = 0;
  
    while (counter < blocksNumber) {
      // Para poder crear un elemento HTML desde JS podemos la funcion createElement
      const newDiv = document.createElement("div"); // <div></div>
      newDiv.style.width = "100px";
      newDiv.style.height = "100px";
      newDiv.style.backgroundColor = generarColorHex();
      // para que este newDiv aparezca debo agregarlo en el body
      // document.body.appendChild(newDiv);
      // buscando a la etiqueta main
      document.querySelector("main").appendChild(newDiv);
      counter++;
    }
  }



// Función que genera una elección aleatoria para la computadora
function getComputerChoice() {
    // Creamos un array con las opciones posibles
    const choices = ["piedra", "papel", "tijera"];
    // Generamos un índice aleatorio entre 0 y el tamaño del array
    const randomIndex = Math.floor(Math.random() * choices.length);
    // Retornamos la opción elegida por la computadora
    return choices[randomIndex];
  }
  
  // Función principal del juego
  function playYanquenpo() {
    // Pedir al usuario que elija una opción
    const userChoice = prompt("Elige: piedra, papel o tijera").toLowerCase(); // Convertimos la elección a minúsculas
  
    // Validar la elección del usuario
    if (!["piedra", "papel", "tijera"].includes(userChoice)) {
      alert("Opción inválida. Por favor, elige piedra, papel o tijera."); // Mensaje si la opción no es válida
      return; // Termina la función si la opción es inválida
    }
  
    // Obtener la elección de la computadora
    const computerChoice = getComputerChoice(); // Llamamos a la función para obtener la elección de la computadora
    console.log("La computadora eligió: " + computerChoice); // Mostrar la elección de la computadora en la consola
  
    // Determinar el resultado del juego
    let result; // Variable para almacenar el resultado del juego
    if (userChoice === computerChoice) {
      result = "¡Es un empate! Ambos eligieron " + userChoice; // Mensaje para el empate
    } else if (
      (userChoice === "piedra" && computerChoice === "tijera") || // Piedra vence a tijera
      (userChoice === "tijera" && computerChoice === "papel") || // Tijera vence a papel
      (userChoice === "papel" && computerChoice === "piedra")    // Papel vence a piedra
    ) {
      result = "¡Ganaste! 😃 Porque la computadora eligió " + computerChoice; // Mensaje para la victoria
    } else {
      result = "¡Perdiste! 😓 porque la computadora eligió " + computerChoice; // Mensaje para la derrota
    }
  
    // Informar el resultado al usuario
    alert(result); // Mostrar el resultado del juego al usuario
  }
  
  // Llamar a la función para iniciar el juego
  //playYanquenpo(); // Ejecutar la función principal para comenzar el juego 
  
