const contarOcurrencias = (cadena, letra) => [...cadena].filter(char => char === letra).length;
console.log(contarOcurrencias("javascript", "a"));