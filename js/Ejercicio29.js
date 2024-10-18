// 29. Comprimir una cadena eliminando letras consecutivas repetidas
const comprimirCadena = () => {
    let cadena = prompt("Ingresa una cadena:");
    return cadena.replace(/(.)\1+/g, "$1");
};
console.log(comprimirCadena());