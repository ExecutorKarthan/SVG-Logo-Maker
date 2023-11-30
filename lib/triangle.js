const shapes = require("./baseShape");

class Triangle extends shapeSuper{
    constructor(point1, point2, point3){
        super(text, textColor)
        this.point1 = [75, 25]
        this.point2 = [225, 25]
        this.point3 = [150, 175]
        this.shape = "polygon"
        this.specs;
    }

    createShape(){
        this.specs = `points=${this.point1[0]}, ${this.point1[1]} ${this.point2[0]}, ${this.point2[1]} ${this.point3[0]}, ${this.point3[1]}`
    }
}

module.exports = Triangle;