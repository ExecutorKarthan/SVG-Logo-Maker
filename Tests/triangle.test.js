const Triangle = require("../lib/triangle");

describe('Creating a triangle logo', () => {
    describe('Test to ensure logo specs pass', () => {
        it('It should output the specs', () => {
            const shape = new Triangle("tst", "blue", "red");
            shape.createShape();
            const shapeSpec = shape.specs;
            expect(shapeSpec).toBe(`points="15, 175 110, 0 220, 175" fill="red"`)
        })
    })
    describe('Test to ensure logo renders correctly', () =>{
        it('It should output the html code rendering of the logo', () => {
            const shape = new Triangle("tst", "blue", "red");
            shape.createShape();
            const renderedVal = shape.render();
            expect(renderedVal).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="15, 175 110, 0 220, 175" fill="red"></polygon>
        <text x="115" y="120" text-anchor="middle" alignment-baseline="middle" font-size="50" fill="blue">tst</text>
        </svg>`)
        })
    })
})             
