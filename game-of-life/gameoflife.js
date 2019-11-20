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
const context = canvas. getContext("2d")
setgridSize(11)
  }
draw()
click(fn)
gerDimension()
getGridSize()
setGridSize(gridSize)
}

class Shape{
constructor(canvas){
this.canvas = (canvas)
this.current =[]
this.collection = {}
}
get()
set(shape)
copy(shape)
redraw()
center()
offset(dx,dy)
toggle(cell)
}
class Controls{
constructor(canvas, shape, gameoflife);
{this.started = false;
this.timer = null
this.generation = 0
}
init(shapes)
setGeneration(gen)
animate()
next()
}
let canvasElement = document.getElementById("canvas-div")
let canvas = new Canvas(canvasElement);
let shape = new Shape(canvas);
let GameOfLife = new GameOfLife(Canvas, Shape, GameOfLife);


  
}
