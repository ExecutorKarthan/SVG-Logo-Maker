const baseShape = require("./baseShape");

class Triangle extends baseShape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
        this.point1 = [50, 175]
        this.point2 = [150, 25]
        this.point3 = [250, 175]
        this.shape = "polygon"
        this.textX = 105;
        this.textY = 130;
        this.specs;
    }

    createShape(){
        this.specs = `points="${this.point1[0]}, ${this.point1[1]} ${this.point2[0]}, ${this.point2[1]} ${this.point3[0]}, ${this.point3[1]}" fill="${this.shapeColor}"`
    }
}

module.exports = Triangle;