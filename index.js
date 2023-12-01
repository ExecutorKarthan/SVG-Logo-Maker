const BaseShape = require('./lib/baseShape.js');
const Rectangle = require('./lib/rectangle.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const baseShape = require('./lib/baseShape.js');
const acceptedCharacters = "abcdefghijklmnopqrstuvwxyz0123456789#"

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
            choices: ["Rectangle", "Circle", "Triangle"]
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
        err ? console.log(err) : console.log("File created.")
        )


        /*const lettersValid = false;
        const textColorValid = false;
        const shapeColorValid = false;
        if(data.logoLetters.length > 1 && data.logoLetters.length < 4){
            lettersValid == true;
        }
        else{
            throw new error("You need at least 1 logo letter and no more than 3. Please reenter your logo letters.")
        }
        const invalidChar = true;
        for(letter of data.textColor){
            if(acceptedCharacters.indexOf(letter.toLowercase()) < 0){
                invalidChar = false;
                break
            }                
        }*/
        
    })
}

init();