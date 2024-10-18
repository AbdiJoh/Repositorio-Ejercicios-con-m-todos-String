// 24. Comprobar si una cadena contiene solo números
const soloNumeros = () => {
    let cadena = prompt("Ingresa una cadena:");
    return /^\d+$/.test(cadena);
};
console.log(soloNumeros());