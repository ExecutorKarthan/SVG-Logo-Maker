//Import libraries for later use
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

//Create a function to prompt the user and then build a logo based on user responses
function init(){
    inquirer
    .prompt([
        //Prompt the user for 3 or less letters
        {
            type: "input",
            name: "logoLetters",
            message: questions[0]
        },
        //Prompt the user for what color the their text needs to be
        {
            type: "input",
            name: "textColor",
            message: questions[1]
        },
        //Prompt the user to determine the shape of the logo
        {
            type: "list",
            name: "shape",
            message: questions[2],
            choices: ["Circle", "Triangle", "Rectangle"]
        },
        //Prompt the user to determine the color of the shape
        {
            type: "input",
            name: "shapeColor",
            message: questions[3]
        }
    ]).then((data) =>{
        var shape = "";
        // Once the user data is collected, determine which function to call depending on the shape requested and make the appropriate shape object
        if(data.shape == "Rectangle"){
            shape = new Rectangle(data.logoLetters.toUpperCase(), data.textColor, data.shapeColor)
        }
        else if(data.shape == "Circle"){
            shape = new Circle(data.logoLetters.toUpperCase(), data.textColor, data.shapeColor)
        }
        else{
            shape = new Triangle(data.logoLetters.toUpperCase(), data.textColor, data.shapeColor)
        }
        
        //Define the specifications that will define the shape's properties
        shape.createShape();

        //Render the shape - meaning generate the code that will create the shape in a browser
        const html = shape.render();

        //Create a svg file to store the newly created shape
        fs.writeFile('./Examples/logo.svg', html, (err)=>
        err ? console.log(err) : console.log("Generated logo.svg")
        )
    })
}

//Start the program to collect user data and make the svg file of said created shape.
init();