//Import the baseShape class for use of its constructor and render() method
const baseShape = require("./baseShape");

class Circle extends baseShape{
    constructor(text, textColor, shapeColor){
        //Provide code that will access baseShape's constructor and add additional values specific to making a circular logo
        super(text, textColor, shapeColor)
        this.cx = 150;
        this.cy = 100;
        this.radius = 60;
        this.shape = "circle"
        this.textX = 150;
        this.textY = 105;
        this.specs;
    }

    //Create a function that adds the object's properties to a pre-formatted string which defines the svg logo's appearance
    createShape(){
        this.specs = `cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.shapeColor}"`
    }
}

//Export this class for use elsewhere
module.exports = Circle;