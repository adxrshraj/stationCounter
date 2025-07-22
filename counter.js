let count = 0;
let prev = [];
const counter = document.getElementById("count");

function setCounter(){
    counter.innerHTML = count;
}
function resetCounter(){

    prev.push(count);
    count = 0;
    setCounter();
}

function increaseCount(){
    count = count + 1;
    setCounter();
}
function previousEntries(){
   document.getElementById("previous").innerHTML = prev;
}
