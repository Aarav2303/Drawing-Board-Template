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
  ctx.lineTo(event.clientX-canvas.offsetLeft,event.clientY-canvas.offetTop);
}
//Color Picker
document.getElement("colorPicker").addEventListener("input",(e)=> {
  brushColor=e.target.value;
});
//Brush Size
document.getElement("brushSize").addEventListener("click",()=> {
  brushSize=e.target.value;
});
//Clear Canvas
document.getElement("clearCanvas").addEventListener("click",()=> {
  ctx.clearRect(0,0,canvas.width,canvas.height);
});
//Save Image
document.getElement("saveElement").addEventListener("click",()-> {
  const link=document.clearElement("a");
link.download="drawing.png";
link.href=canvas.toDataURL();
link.click();
});











