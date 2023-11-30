const baseShape = require("./baseShape");

class Circle extends baseShape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
        this.cx = 150;
        this.cy = 100;
        this.radius = 60;
        this.shape = "circle"
        this.textX = 100;
        this.textY = 115;
        this.specs;
    }

    createShape(){
        this.specs = `cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.shapeColor}"`
    }
}

module.exports = Circle;