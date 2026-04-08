/* 
    1. String -> Texto (Com aspas duplas ou simples). ex: "Ola", 'Ola', `Ola` ( teamplate literals ou template strings ).
    2. Number -> Número 
    3. Boolean -> Verdadeiro ou Falso
    4. Object -> Objeto
    5. Null & Undefined -> Nulo e indefinido
    6 Array -> 
*/

/*  <------------------ STRING ------------------>  */
const myAge = 30
const myCar = `Skyline`
const mystring = ` minha idade eh ${myAge}, to ficando velho e minha carro eh ${myCar}` // template literals ou template strings.
console.log(mystring)

/*  <------------------ NUMBER ------------------> */
const number1 = 10
const number2 = 30.5 // não pode usar virgula, precisa usar ponto
const number3 = number1 * number2 // multiplicação
const number4 = number1 / number2 // divisão
const number5 = number1 % number2 //

/*  <------------------ BOOLEAN ------------------> */
const boolean1 = true
const boolean2 = false



/*  <------------------ OBJECT ------------------>  */
const object1 = {
    name: "Vinicius",
    age: 30,
    car: "Skyline",
    address: {
        street: "Rua 1",
        number: 123,
        cidade: "Rio de Janeiro",
        estate: "RJ",
        country: "Brasil"
    }
}
console.log(object1.address.cidade) // acessando o objeto dentro do objeto


/*  <------------------ NULL & UNDEFINED ------------------>  */
const user = {
    name: "Vinicius",
    age: 30,
    conjuge: null
}
