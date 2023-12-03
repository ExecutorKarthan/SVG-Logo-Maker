
const BaseShape = require('./lib/baseShape.js');
const Rectangle = require('./lib/rectangle.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    //Logo Text Letters
    "What are the letters to your logo? Please enter in no more than 3!",
    
    //Text Color
    "What color would you like your text? You can use lowercase english letters or by entering # followed by hexadecimal numbers.",
    
    //Shape
    "What shape would you like?",
    
    //Shape Color
    "What color would you like to use for your shape? You can use lowercase english letters or by entering # hexadecimal numbers.", 
];

function init(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "logoLetters",
            message: questions[0]
        },
        {
            type: "input",
            name: "textColor",
            message: questions[1]
        },
        {
            type: "list",
            name: "shape",
            message: questions[2],
            choices: ["Circle", "Triangle", "Rectangle"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: questions[3]
        }
    ]).then((data) =>{
        var shape = "";
        if(data.shape == "Rectangle"){
            shape = new Rectangle(data.logoLetters.toUpperCase(), data.textColor, data.shapeColor)
        }
        else if(data.shape == "Circle"){
            shape = new Circle(data.logoLetters.toUpperCase(), data.textColor, data.shapeColor)
        }
        else{
            shape = new Triangle(data.logoLetters.toUpperCase(), data.textColor, data.shapeColor)
        }
        
        shape.createShape();
        const html = shape.render();
        fs.writeFile('./Examples/logo.svg', html, (err)=>
        err ? console.log(err) : console.log("Generated logo.svg")
        )
    })
}

init();