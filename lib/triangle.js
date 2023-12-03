//Import the baseShape class for use of its constructor and render() method
const baseShape = require("./baseShape");

class Triangle extends baseShape{
    constructor(text, textColor, shapeColor){
        //Provide code that will access baseShape's constructor and add additional values specific to making a triangular logo
        super(text, textColor, shapeColor)
        this.point1 = [15, 175]
        this.point2 = [110, 0]
        this.point3 = [220, 175]
        this.shape = "polygon"
        this.textX = 115;
        this.textY = 120;
        this.specs;
    }
    
    //Create a function that adds the object's properties to a pre-formatted string which defines the svg logo's appearance
    createShape(){
        this.specs = `points="${this.point1[0]}, ${this.point1[1]} ${this.point2[0]}, ${this.point2[1]} ${this.point3[0]}, ${this.point3[1]}" fill="${this.shapeColor}"`
    }
}

//Export this class for use elsewhere
module.exports = Triangle;