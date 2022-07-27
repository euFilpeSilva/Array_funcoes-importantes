// arrow function

const felizNatal = () => console.log('Feliz Natal');
felizNatal()

const saudacao = nome => `Fala ${nome}!!!`

console.log(saudacao("Filipe"));

const somar = numeros => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}
 
console.log(somar([1,2,3,4,5,6,7,8,9,10]));


// brincando com arrow function
const potencia = base => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}

console.log(potencia(2)(8));
