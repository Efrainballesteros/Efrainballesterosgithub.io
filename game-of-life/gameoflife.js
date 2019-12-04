  class GameOfLife{
  constructor(){
  }
next(shape){}
}
class Canvas{
  constructor(container){
let canvasElement = document.createElement("canvas")
this.obj = canvasElement;
this.pixelWidth(803,506)
container.appendChild(canvasElement);
const context = canvas. getContext('2d')
setgridSize(11)
  }
draw(
  this.ctx.lineWidth = 1;
  this.ctx.lineStroke ='#999'

  for(let i = this.cellSize; i < this.pixelWidth; i = i + this.cellSize)
  this.ctx.moveTo(i + 0.5, 0);
  this.ctx.lineTo(i + 0.5,0, this.pixelHeight);
  this.ctx.stroke();

  for(let i = this.cellSize; i < this.pixelWidth; i = i + this.cellSize)
  this.ctx.moveTo(i + 0.5, 0);
  this.ctx.lineTo(i + 0.5,0, this.pixelWidth; i=i + this.cellSize);
  this.ctx.stroke();

  this.ctx.fillstyle = 'yellow';
  for(let i = 0; i < cell.length; i = i + 1){
let cell = cells[i];
let x = cell[0];
let y = cell[i];
this.ctx.fillRect(x * this.cellSize + 1, y * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
  }
)
click(fn)
this.obj.addEventListener('click', (clickevent)) => {
let rect= this.obj.getBoundingClientRect();
let clientX = clickEvent.clientX;
let clientY = clickEvent.clientY;

let canvasX = clientX - rect.left;
let canvasY =clientY - rect.top;

let cellX = Math.floor (canvasX / this.cellSize);
let cellY = Mathe.floor (canvasY / this.cellSize;
  console.log(clickEvent);
}
gerDimension()
getGridSize()
setGridSize(gridSize)
}

class Shape{
constructor(canvas){
this.canvas = (canvas)
this.current =[]
this.collection = {}
this.shape = Shape.get;
}
get()
set(shape)
copy(shape)
redraw()
center()
offset(dx,dy)
toggle(cell)
this.current = [];
}
class Controls{
constructor(canvas, shape, gameoflife);
{this.started = false;
this.timer = null
this.generation = 0
}
init(shapes)
this.shape.redraw();


this.canvas.click((event) =>
 this.shape.toggle([event.cellX, event.cellY]);
setGeneration(gen)
animate()
next()
}
let canvasElement = document.getElementById("canvas-div")
let canvas = new Canvas(canvasElement);
let shape = new Shape(canvas);
let GameOfLife = new GameOfLife(Canvas, Shape, GameOfLife = Shape.set);

Shape.redraw();
this.obj.neighbours, n(x, y) = populated;




}
Controls.init();
controls.next(shape.get)
this.gameOfLife(shape data)
