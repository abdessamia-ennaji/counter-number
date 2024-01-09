let number = document.getElementById("number");
let incrementer = document.getElementById("incrementer");
let decrement = document.getElementById("decrement");

incrementer.onclick = () => {
    number.value =+ number.value + 1;
};


decrement.onclick = () => {
    number.value =+ number.value - 1;
};
