let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let result = document.getElementById("answ");
let anw ;

function play() {
    let N1 = Math.floor(Math.random() * 10);
    let N2 = Math.floor(Math.random() * 10);
    let N3 = Math.floor(Math.random() * 10);

    slot1.value = N1;
    slot2.value = N2;
    slot3.value = N3;

    if (N1 === N2 && N1 === N3) {
    anw ="WINNER"   
    } else if (N1 === N2 || N1 === N3 || N2 === N3) {
    anw = "MINOR WIN"
    } else {
    anw = "LOSE"
    }
    result.value = anw;
}


