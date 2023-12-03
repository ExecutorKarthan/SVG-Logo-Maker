const Rectangle = require("../lib/rectangle");

describe('Creating a rectangle logo', () => {
    describe('Test to ensure logo specs pass', () => {
        it('It should output the specs', () => {
            const shape = new Rectangle("tst", "blue", "red");
            shape.createShape();
            const shapeSpec = shape.specs;
            expect(shapeSpec).toBe(`x="25" y="50" width="100%" height="100%" fill="red"`)
        })
    })
    describe('Test to ensure logo renders correctly', () =>{
        it('It should output the html code rendering of the logo', () => {
            const shape = new Rectangle("tst", "blue", "red");
            shape.createShape();
            const renderedVal = shape.render();
            expect(renderedVal).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="50" width="100%" height="100%" fill="red"></rect>
        <text x="160" y="130" text-anchor="middle" alignment-baseline="middle" font-size="50" fill="blue">tst</text>
        </svg>`)
        })
    })
})             
