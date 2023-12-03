const Circle = require("../lib/circle")

describe('Creating a circle logo', () => {
    describe('Test to ensure logo specs pass', () => {
        it('It should output the specs', () => {
            const shape = new Circle("tst", "blue", "red");
            shape.createShape();
            const shapeSpec = shape.specs;
            expect(shapeSpec).toBe(`cx="150" cy="100" r="60" fill="red"`)
        })
    })
    describe('Test to ensure logo renders correctly', () =>{
        it('It should output the html code rendering of the logo', () => {
            const shape = new Circle("tst", "blue", "red");
            shape.createShape();
            const renderedVal = shape.render();
            expect(renderedVal).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="60" fill="red"></circle>
        <text x="150" y="105" text-anchor="middle" alignment-baseline="middle" font-size="50" fill="blue">tst</text>
        </svg>`)
        })
    })
})             
