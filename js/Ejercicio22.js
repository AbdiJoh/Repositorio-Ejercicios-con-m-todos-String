// 22. Convertir una frase a camelCase
const convertirCamelCase = () => {
    let cadena = prompt("Ingresa una frase:");
    return cadena.split(" ").map((palabra, i) => 
        i === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    ).join("");
};
console.log(convertirCamelCase());