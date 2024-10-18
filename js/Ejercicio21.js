// 21. Reemplazar todas las ocurrencias de una palabra
const reemplazarTodas = () => {
    let cadena = prompt("Ingresa una cadena:");
    let palabra = prompt("Ingresa la palabra a reemplazar:");
    let reemplazo = prompt("Ingresa la palabra de reemplazo:");
    return cadena.replaceAll(palabra, reemplazo);
};
console.log(reemplazarTodas());