//Import the baseShape class for use of its constructor and render() method
const baseShape = require("./baseShape");

class Rectangle extends baseShape{
    constructor(text, textColor, shapeColor){
        //Provide code that will access baseShape's constructor and add additional values specific to making a rectangular logo
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

    //Create a function that adds the object's properties to a pre-formatted string which defines the svg logo's appearance
    createShape(){
        this.specs = `x="${this.x}" y="${this.y}" width="${this.width}%" height="${this.height}%" fill="${this.shapeColor}"`
    }
}

//Export this class for use elsewhere
module.exports = Rectangle;