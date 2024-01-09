let fizzBuzzQuadrato = document.getElementById("fizzbuzzquadrato")

function fizzbuzzquadrato() {
    for (let i = 1; i <= 100; i++) {


        let container = document.createElement("div");
        container.classList.add("col-1", "mb-3", "max-width-container", "fizzbuzz-container");

        let numero = document.createElement("div");
        numero.classList.add("numero");

        if (i % 3 === 0 && i % 5 === 0) {
            numero.textContent = "Fizzbuzz";
            numero.style.backgroundColor = "red";
        } else if (i % 3 === 0) {
            numero.textContent = "Fizz";
            numero.style.backgroundColor = "green";
        } else if (i % 5 === 0) {
            numero.textContent = "Buzz";
            numero.style.backgroundColor = "yellow";
        } else {
            numero.textContent = i;
            numero.style.backgroundColor = "blue";
        }

        container.appendChild(numero);
        fizzBuzzQuadrato.appendChild(container);
    }
}

fizzbuzzquadrato();