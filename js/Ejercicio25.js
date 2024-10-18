// 25. Remover caracteres especiales de una cadena
const removerCaracteresEspeciales = () => {
    let cadena = prompt("Ingresa una cadena con caracteres especiales:");
    return cadena.replace(/[^a-zA-Z0-9]/g, "");
};
console.log(removerCaracteresEspeciales());