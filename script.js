const gameBoard = document.getElementById("gameBoard");
const gameInfo = document.getElementById("gameInfo");
const cellTarget = document.querySelectorAll(".activeCell");

let whoseTurn= 'circle';
gameInfo.textContent= `${whoseTurn} turn`


for (let i=0;i<9;i++){
const newCell = document.createElement("div");
newCell.id=i;
newCell.classList.add("activeCell");

newCell.addEventListener('click',fillCell,{once:true});
gameBoard.append(newCell);


}


function fillCell(e){
   
    e.target.classList.add(whoseTurn);
    switchPlayer();
    gameState();

}
function switchPlayer(){

   whoseTurn==='circle' ? whoseTurn='x':whoseTurn='circle';
   gameInfo.textContent= `${whoseTurn} turn`
  
   
//    console.log(whoseTurn);

}

function gameState(){
const winningArray=[[0,1,2],[3,4,5],[6,7,8]
,[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

winningArray.forEach(x=>checkWin(...x));

    // if(document.getElementById({first}).classList.contains('circle'))




function checkWin(first,second,third){
    let allCircle = document.querySelectorAll(".circle");
    let allX = document.querySelectorAll(".x");



    let cellTarget = document.querySelectorAll(".activeCell");
   if ( cellTarget[first].classList.contains('circle')&& cellTarget[second].classList.contains('circle')&& cellTarget[third].classList.contains('circle')){
    gameInfo.textContent= "Circle Wins"
    for (let i=0;i<9;i++){
    
        
        cellTarget[i].removeEventListener('click',fillCell,{once:true});
       
        
        
        }
    return
   }

   if ( cellTarget[first].classList.contains('x')&& cellTarget[second].classList.contains('x')&& cellTarget[third].classList.contains('x')){
    gameInfo.textContent= "X Wins"
    for (let i=0;i<9;i++){
    
        
        cellTarget[i].removeEventListener('click',fillCell,{once:true});
       
        
        
        }

    return
   }
   if ((allCircle.length + allX.length )=== 9){
    gameInfo.textContent="Draw";
}

}
}
