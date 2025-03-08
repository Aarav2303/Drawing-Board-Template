const canvas=document.getElement("drawingBoard");
const ctx=canvas.getContext("2d");
//Setting canvas size
canvas.width=window.innerWidth-20;
canvas.height=window.innerHeight-100;
//default brush settings
let painting=false;
let brushColor="#000000";
let brushSize=5;
//Mouse settings
canvas.addEventListener("mousedown",()=> painting=true);
canvas.addEventListener("mouseup",()=> painting=false);
canvas.addEventListener("mousemove",draw);
//Function to draw on canvas
function draw(event){
  if(!painting) return;
  ctx.lineWidth=brushSize;
  ctx.lineCap="round";
  ctx.strokeStyle=brushColor;
