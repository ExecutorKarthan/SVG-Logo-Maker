const baseShape = require("./baseShape");

class Rectangle extends baseShape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
        this.x = 25;
        this.y = 50;
        this.width = 100;
        this.height = 100;
        this.shape = "rect"
        this.textX = 160;
        this.textY = 130;
        this.specs;
    }

    createShape(){
        this.specs = `x="${this.x}" y="${this.y}" width="${this.width}%" height="${this.height}%" fill="${this.shapeColor}"`
    }
}

module.exports = Rectangle;