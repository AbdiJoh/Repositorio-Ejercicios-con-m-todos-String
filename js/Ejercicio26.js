// 26. Devolver la palabra más larga en una cadena
const palabraMasLarga = () => {
    let cadena = prompt("Ingresa una cadena:");
    return cadena.split(" ").reduce((a, b) => a.length > b.length ? a : b);
};
console.log(palabraMasLarga());