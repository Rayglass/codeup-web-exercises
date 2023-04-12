const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

// text.classList.add('change')

// changeColor.addEventListener('click', function(){
//     text.classList.add('change')
// })
//
//
changeColor.addEventListener('click', function(){
    text.classList.toggle('change');
})

function myFunction() {
    alert('Hello');
}

let myVar = setInterval(myTimer ,1000);
function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}