// Lexical scope 
// Global scope - Defined outsidwe of all code blocks
// Local scope - Defined inside a code block 

let varOne = 'varone'

if (true) {
    console.log(varOne)
    let varTwo = 'vartwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)