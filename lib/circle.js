const shapes = require("./baseShape");

class Circle extends shapes{
    constructor(cx, cy, radius){
        super(text, textColor)
        this.cx = 150;
        this.cy = 100;
        this.radius = radius
        this.shape = "circle"
        this.specs;
    }

    createShape(){
        this.specs = `cx=${this.cx} cy=${this.cy} radius=${this.radius}`
    }
}

module.exports = Circle;