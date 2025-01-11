const make=document.getElementById('draw');
const erase= document.getElementById('erase');
const adjustPixels=document.getElementById('adjustpixels');
const reset=document.getElementById('reset');
const canvas=document.querySelector('.grid');

let size=16;
let current="draw";

function gridGeneration(size){

    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
    const cellSize=250/(size); 
    for(let i=1;i<=size;i++){
        const row= document.createElement("div");
        row.style.display="flex";
        canvas.appendChild(row);
    
    for( let j=1;j<=size;j++){
        const cell=document.createElement("div");
        cell.style.border="1px solid black";
        cell.style.width=`${cellSize}px`;
        cell.style.height=`${cellSize}px`;
        cell.style.boxSizing='border-box';
        cell.style.backgroundColor='white';
        cell.classList.add('cell');
        row.appendChild(cell);
        
    }
    
}
    
    cellListener();
}

function Draw(){
    current ="draw";
}

function Erase(){
    current ="erase";
}

function cellListener(){
       const cells= document.querySelectorAll(".cell");
       cells.forEach( box=>{
        box.addEventListener("mouseover", function(e){
            if(current=="draw"){
                box.style.backgroundColor="blue";
            }
            else if(current=="erase"){
                box.style.backgroundColor="white";
            }
        });
       });
}

function resetCanvas(){
    const cells=document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor="white";
    });

}

function PixelAdjust(){
    const pixel=parseInt(prompt("Enter the Size of Dimension you want '1-50'"));
    if( pixel<=0){
        alert("Enter valid dimension size!!");
        return;
    }

    gridGeneration(pixel);
}

 document.addEventListener("DOMloaded",() => {
    gridGeneration(16);
 });


 //console.log(make);
addEventListener("load",PixelAdjust);
make.addEventListener("click", Draw);
adjustPixels.addEventListener("click",PixelAdjust);
erase.addEventListener("click",Erase);
reset.addEventListener("click",resetCanvas);
