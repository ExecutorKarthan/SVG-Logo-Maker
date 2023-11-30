const shapes = require("./baseShape");

class Rectangle extends shapeSuper{
    constructor(x, y){
        super(text, textColor)
        this.x = x;
        this.y = y;
        this.width = 250;
        this.height = 175;
        this.shape = "rectangle"
        this.specs;
    }

    createShape(){
        this.specs = `x=${this.x} y=${this.y} width=${this.width} height=${this.height}`
    }
}

module.exports = Rectangle;