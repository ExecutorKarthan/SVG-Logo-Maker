class baseShape{
    constructor(text, textColor){
        this.text = text;
        this.textColor = textColor;
        this.textX = 150;
        this.textY = 100;
    }

    render(){
        return `<svg version"1.1" width="300" height="200"> 
        <${this.shape} ${this.specs} />
        <text x=${this.textX} y=${this.textY} text-anchor: middle> font-size="50" fill=${this.textColor}>${this.text}</text>
        </svg>`
    }
}

module.exports = baseShape;