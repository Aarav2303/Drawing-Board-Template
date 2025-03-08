const canvas=document.getElementById("drawingBoard");
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
  ctx.lineTo(event.clientX-canvas.offsetLeft,event.clientY-canvas.offetTop);
}
//Color Picker
document.getElementById("colorPicker").addEventListener("input",(e)=> {
  brushColor=e.target.value;
});
//Brush Size
document.getElementById("brushSize").addEventListener("click",()=> {
  brushSize=e.target.value;
});
//Clear Canvas
document.getElementById("clearCanvas").addEventListener("click",()=> {
  ctx.clearRect(0,0,canvas.width,canvas.height);
});
//Save Image
document.getElementById("saveElement").addEventListener("click",()=> {
  const link=document.creatElement("a");
link.download="drawing.png";
link.href=canvas.toDataURL();
link.click();
});











