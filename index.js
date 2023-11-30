const BaseShape = require('./lib/baseShape.js');
const Rectangle = require('./lib/rectangle.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
//const inquirer = require('inquirer');
const fs = require('fs');


shape.createShape();
const html = shape.render();
fs.writeFile('./Examples/triangle.svg', html, (err)=>
    err ? console.log(err) : console.log("File created.")
)
