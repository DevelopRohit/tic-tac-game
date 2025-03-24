let boxes = document.querySelectorAll('.box');
let restart  = document.querySelector('.reset');
let windiv = document.querySelector('#winner');

let turn0 = true; //select a turn of players 

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if (turn0 ) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; //this is not working 
        checkwinner ();
    });

    let disableboxes=()=>{
        for (const box of boxes) {
            box.disabled = true;
        }
    }

    const checkwinner = () =>{
        for (const pattern of winpattern) {
            let pos1value = boxes[pattern[0]].innerText;
            let pos2value = boxes[pattern[1]].innerText;
            let pos3value = boxes[pattern[2]].innerText;
            if (pos1value !== "" && pos2value !=="" && pos3value !== "") {
                if (pos1value === pos2value && pos2value === pos3value) {
                    windiv.innerHTML = `winner is ${pos1value}`
                    disableboxes();
                }
    
            }
        }
    } 
});

let newgame = () =>{
    turn0 = true;
    resartgame();

}


let resartgame = () =>{
    for (let  box of boxes) {
        box.disabled  = false;
        box.innerText = "";
        windiv.innerHTML = "";
    }
}


restart.addEventListener("click",newgame);

