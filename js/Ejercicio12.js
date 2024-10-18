const esPalindromo = (cadena) => {
    const cadenaReversa = cadena.split("").reverse().join("");
    return cadena === cadenaReversa;
};
console.log(esPalindromo("ana"));