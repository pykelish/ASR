/* Trabajado por Fabian Ramirez Flores y Marina Amellaly Beltran Moreno
    05 / 05 / 23
    Ingeniería en Desarrollo de Software
    Programación de Sistemas
*/

let cadena = '';
let position = 0;
let invalido = false;

const validationA = () => { //entra a la validacion A
  validationB(); //entra a la validacion B
  while (cadena[position] == '+') {
    position++;
    validationB(); //entra a la validacion B
  }
};

const validationB = () => { //entra a la validacion B
  validationC(); // entra a la validacion C
  while (cadena[position] == '*') {
    position++;
    validationC(); // entra a la validacion C
  }
};

const validationC = () => { //entra a la validacion C
  if (cadena[position] == '(') {
    position++;
    validationA(); // entra a la validacion A
    if (cadena[position] == ')') {
      position++;
    } else {
      invalido = true;
    }
  } else if (cadena[position] == 'i') {
    position++;
  } else {
    invalido = true;
  }
};

// Ejemplo de uso
cadena = 'i+i';
const cadenas = [
    'i', 'i+i', 'i-i', 'i+i-i', 'i-i+i', 'i*i', 'i+', '+i', '(i)', '(i', 'i)', '(i)+i'
    
];

cadenas.forEach(e => {
  cadena = e;
  position = 0;
  invalido = false;
  validationA();
  if (!invalido && position == cadena.length) {
    console.log(`La cadena [ ${e} ] si es valida`);
  } else {
    console.log(`La cadena [ ${e} ] no es valida`);
  }
});
