const main_canvas = document.getElementById("main-canvas");
const ctx = main_canvas.getContext("2d");

window.ctx = ctx;

let initialX;
let initialY;

function draw(x,y){

  ctx.beginPath();

  ctx.moveTo(initialX,initialY);
  ctx.lineWidth = 20;
  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineTo(x,y)
  ctx.stroke();

  initialX = x;
  initialY = y;

}

function mouseMove(e){
  draw(e.offsetX, e.offsetY);
}

main_canvas.onmousemove = mouseMove;