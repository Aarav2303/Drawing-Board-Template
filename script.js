const canvas = document.getElementById("drawingBoard");
const ctx = canvas.getContext("2d");

// Setting canvas size
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;

// Default brush settings
let painting = false;
let brushColor = "#000000";
let brushSize = 5;

// Mouse events
canvas.addEventListener("mousedown", () => (painting = true));
canvas.addEventListener("mouseup", () => (painting = false));
canvas.addEventListener("mousemove", draw);

// Function to draw on canvas
function draw(event) {
  if (!painting) return;
  
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = brushColor;
  
  ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Color Picker
document.getElementById("colorPicker").addEventListener("input", (e) => {
  brushColor = e.target.value;
});

// Brush Size
document.getElementById("brushSize").addEventListener("input", (e) => {
  brushSize = e.target.value;
});

// Clear Canvas
document.getElementById("clearCanvas").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save Image
document.getElementById("saveImage").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDataURL();
  link.click();
});











