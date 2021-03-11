'use strict'

const background = document.querySelector('.body-background');
const generateButton = document.getElementById('generate-button');
const codeColor = document.getElementById('code-color');
const clipboardButton = document.getElementById('clipboard');

// let r = Math.random().toString(36).substring(7);
// let r = Math.random().toString(36).slice(2, 8).toUpperCase(); // 8 - 2 = 6 letras


/*
toString(base) -> Convierte un numero a una base en especifica (2, 8, 16. Rango: [2 -36]). Si le coloco 36 sera base 36 con las 26 letras del alfabeto + los 10 numeros(0-9) => convertira el numero a esa base.
   RETORNA un string.
*/

let randomColor = '';

const generateRandomColor = function () {
   return Math.random().toString(16).slice(2, 8).toUpperCase()
}


generateButton.addEventListener('click', function () {
   randomColor = `#${generateRandomColor()}`;
   codeColor.textContent = randomColor;

   // background.classList.remove('body-background'); // Remueve la clase
   background.style.background = randomColor;
   // background.style.background = `red`;
});


clipboardButton.addEventListener('click', function () {
   // const color = `#${randomColor}`;
   // const color = codeColor.innerText;

   if (randomColor != '') {
      let input = document.createElement('textarea');
      input.value = randomColor;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();//Elimino el elemento para que no se anide con otros copies
      alert(`Color ${randomColor} copied !`);
   } else
      alert('No genero ningun color. Por favor, precione \'Generate !\'');
});

/*

DETALLES A COLOCAR

1_ Borde multicolor al CLIPBOARD -> MAS O MENOS LISTO

2_ Animacion cuando se preciona el GENERATE!

3_ Cada vez que se copia eliminar tambien el elemento de TEXTAREA. HECHO

4_ El color del clipboard que cambie con ell complemento del color para que sea mas visible.
   Ver la teoria de los colores en HEXA para mas info



   Pasa el HEXA a DECIMAL...
   var hex = parseInt(randomColor.replace(/^#/, ''), 16);
undefined
console.log(hex)

*/