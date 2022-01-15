// Multiple arguments
let add = function(a, b) {
     return a * b
}

let result = add(10, 5)
console.log(result)  

//Default arguments

let getScoreText = function (name = 'Adib', score = '101') {
    return `Name: ${name} - Score: ${score}`
    //return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)

// Challage Area

let getTip = function (total, tipPercent) {
    let percent = tipPercent * 100 
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(40, .25)
console.log(tip)

let name = 'adibaiman'
console.log(`Hey,my name is ${name}`)