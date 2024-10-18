// 28. Capitalizar todas las palabras de una frase
const capitalizarPalabras = () => {
    let cadena = prompt("Ingresa una frase:");
    return cadena.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
};
console.log(capitalizarPalabras());