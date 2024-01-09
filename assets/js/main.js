let fizzBuzzQuadrato = document.getElementById("fizzbuzzquadrato")

function fizzbuzzquadrato (){

    let result = ""

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            result += '<div class=" fizzbuzzquadrato"><div class="numero">Fizzbuzz</div></div>' 
        } else if (i % 3 === 0 ){
            result += '<div class=" fizzbuzzquadrato"><div class="numero">Fizz</div></div>' 
        }else if (i % 5 === 0){
            result += '<div class=" fizzbuzzquadrato"><div class="numero">Buzz</div></div>' 
        }else{
            result += `<div class=" fizzbuzzquadrato"><div class="numero">${i}</div></div>` 
        }
    }
    return result
}
fizzBuzzQuadrato.innerHTML = fizzbuzzquadrato()