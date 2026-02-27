let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let h3 = document.querySelector("h3");
let win = document.getElementsByClassName("winner")
console.log(winner);


let turnO = true; //PlayerO or PlayerX

const winCondition = [
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8]
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }
        else{
            btn.innerText = "X";
            turnO = true;
        }
        btns.disabled = true;
        checkWinner();
    })
})

const showWinner = (winner) => {
    win.innerHTML = "Congrulation , Winner is ",winner;
    h3.classList.remove("hide");
} 

const checkWinner = () => {
    for (const pattern of winCondition) {
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("Winner is",pos1val);
            showWinner(pos1val);
           }   
        }
    }
    
    
}