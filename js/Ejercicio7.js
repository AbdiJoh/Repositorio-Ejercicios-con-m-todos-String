// 7. Eliminar espacios al inicio y al final
const eliminarEspacios = () => {
    let cadena = prompt("Ingresa una cadena con espacios:");
    return cadena.trim();
};
console.log(eliminarEspacios());