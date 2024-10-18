// 23. Truncar una cadena a un número de caracteres
const truncarCadena = () => {
    let cadena = prompt("Ingresa una cadena:");
    let num = parseInt(prompt("Ingresa el número de caracteres:"));
    return cadena.length > num ? cadena.slice(0, num) + "..." : cadena;
};
console.log(truncarCadena());