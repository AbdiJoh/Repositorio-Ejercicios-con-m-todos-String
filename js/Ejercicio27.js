// 27. Convertir una cadena a snake_case
const convertirSnakeCase = () => {
    let cadena = prompt("Ingresa una frase:");
    return cadena.toLowerCase().split(" ").join("_");
};
console.log(convertirSnakeCase());