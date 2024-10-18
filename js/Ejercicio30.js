// 30. Contar la frecuencia de caracteres en una cadena
const contarFrecuenciaCaracteres = () => {
    let cadena = prompt("Ingresa una cadena:");
    return [...cadena].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
};
console.log(contarFrecuenciaCaracteres());