let  name = "Carlos";
let lastName = " Hernández";
let age = 18;

console.log("Soy " + name + ' y mi apellido es ' + lastName);

console.log("I'm " + name + "" + lastName);
console.log("I\'m " + name + "" + lastName);

// Imprimir Soy Carlos Heernández y tengo 18 años
// Strings Templates o Strings Literales
//placeholder ${}
console.log(`Soy ${ name } ${ lastName } y tengo ${ age } años`);

// metodos y atributos para Strings
const texto = "Este Es uN TexTo";
console.log (texto.toUpperCase());
console.log (texto.toLowerCase());
console.log (texto.charAt(5));
console.log (texto.endsWith('s'));
console.log (texto.includes('es'));
console.log (texto.length);