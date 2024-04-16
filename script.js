var winnerText=document.querySelector(".winner_text");
var playerTurn = document.querySelector(".turn");
var box = document.querySelectorAll(".boxes .box");
var reset = document.querySelector(".reset");
var turn=1;
var conditions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
box.forEach((e)=>{
    e.addEventListener("click",function(){
       
        if (turn==1) {
            playerTurn.textContent = "Player second  trun x";
             this.textContent = "0";
             turn=0;
        } else {
               playerTurn.textContent = "Player first Turn o";
            this.textContent="x";
            turn=1;
        }
        this.disabled=true;
        checkWinner();
    })
   
});

reset.addEventListener("click",function(){
    playerTurn.textContent = "Playeer o first";
    box.forEach((e)=>{
        e.textContent="";
        e.disabled=false;
    })
})
const checkWinner=()=>{
    for (const condition of conditions) {
        // console.log(condition[0],condition[1],condition[2]);
        // console.log(box[condition[0]].innerText,box[condition[1]].innerText,box[condition[2]].innerText);
        pos1Val = box[condition[0]].innerText;
        pos2Val = box[condition[1]].innerText;
        pos3Val = box[condition[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
              
                printWinner(pos1Val);
            
            }
        }
    }
}
const printWinner=(winner)=>{
    winnerText.style.display="block";
    winnerText.textContent=`The winner is ${winner}`;
    box.forEach((e)=>{
            e.disabled=true;
    })
}

