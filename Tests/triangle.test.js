//Import the proper class to create a shape
const Triangle = require("../lib/triangle");

//Create a test statement to ensure main code is operating correctly
describe('Creating a triangle logo', () => {
    describe('Test to ensure logo specs pass', () => {
        //Create a test that will create a shape and will generate the specifications of the logo
        //This test will show if the baseShape works as its constructor is used to make the shape object
        //This test will show if the code passes the shape object's properties to its .createShape() function
        //This test will show if a string of its specifications is generated with proper formatting and values
        it('It should output the specs', () => {
            //Create the shape
            const shape = new Triangle("tst", "blue", "red");
            //Create its specifications
            shape.createShape();
            const shapeSpec = shape.specs;
            expect(shapeSpec).toBe(`points="15, 175 110, 0 220, 175" fill="red"`)
        })
    })
        //Create a test that will create a shape and will generate the specifications of the logo
        //This test will show if the baseShape class works as its .render() function is called
        //This test will show if a string is generated with proper formatting and values to create the logo in question
    describe('Test to ensure logo renders correctly', () =>{
        it('It should output the html code rendering of the logo', () => {
            //Create the shape
            const shape = new Triangle("tst", "blue", "red");
            //Create its specifications
            shape.createShape();
            //Render the specifications into code to make the html code for the logo
            const renderedVal = shape.render();
            //Test the expected html to the actual resulting html
            expect(renderedVal).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="15, 175 110, 0 220, 175" fill="red"></polygon>
        <text x="115" y="120" text-anchor="middle" alignment-baseline="middle" font-size="50" fill="blue">tst</text>
        </svg>`)
        })
    })
})             
