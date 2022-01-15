// student score, total possibble score  

let gradeCal = function(score, totalScore){
    let persent = (score / totalScore) * 100

    if (persent >= 90) {
        return `You got a A (${persent})`
    }
}

let result = gradeCal(19, 20)
console.log(result)