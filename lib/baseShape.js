//Create a super class that will provide a common constructor and method to the other functions
class baseShape{
    //Generate a constructor that stores the 3 or less letter text for the logo, the text color for the logo and the color of the shape
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    //Create a function that creates the html to actual make the logo, filling in the object's properties for specificity
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} ${this.specs}></${this.shape}>
        <text x="${this.textX}" y="${this.textY}" text-anchor="middle" alignment-baseline="middle" font-size="50" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

//Export this class for use elsewhere
module.exports = baseShape;