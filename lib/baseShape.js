class baseShape{
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} ${this.specs}></${this.shape}>
        <text x="${this.textX}" y="${this.textY}" text-anchor="middle" alignment-baseline="middle" font-size="50" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = baseShape;