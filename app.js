
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".newG");
const newGameBtn = document.querySelector(".newgame");
const winMsg = document.querySelector(".win");
const msg = document.querySelector("#msg");
const body=document.querySelector(".container");
const resetC=document.querySelector(".reset");
const newGameBtn1 = document.querySelector(".newgame1");
const nowin = document.querySelector(".nowin");
const NWmsg = document.querySelector("#msg1");
let turnO = true;
var count=0;
const max_click=9;
const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
];
const resetgame = () =>{
turnO=true;
count = 0; 
enableboxes();
winMsg.classList.add("hide");
body.classList.remove("hide"); 
    resetC.classList.remove("hide"); 
    nowin.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false; 
        } else {
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const enableboxes=()=>{
    for (let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const disbaleboxes=()=>{
    for (let box of boxes)
    {
        box.disabled=true;
    }
};


const showWinner = (winner) => {
    if(winner){
    msg.innerText = `Congratulations, the winner is ${winner}!`; 
    winMsg.classList.remove("hide");
    body.classList.add("hide"); 
    resetC.classList.add("hide"); 
    }
    else {
        nowin.classList.remove("hide");
        body.classList.add("hide"); 
        resetC.classList.add("hide"); 
    }
    disbaleboxes();

};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const pos1Val = boxes[pattern[0]].innerText;
        const pos2Val = boxes[pattern[1]].innerText;
        const pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val); 
                return; 
            }
   
        }
    }
    if(count===max_click){
        showWinner();
    }
};

newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
newGameBtn1.addEventListener("click",resetgame);