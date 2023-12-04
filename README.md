# SVG-Logo-Maker
This is a logo maker that will produce a logo that consists of 3 letters on a background, saving this file as a SVG file. 

## Description
This project was a good opportunity for me to understand how helpful creating classes and superclasses are, specifically with respect to creating consistent non-repetitive code. Through the use of a super class, I was able to use one constructor for each sub class, as well as provide a singular method for each class to consistently generate their html code. This project uses inquirer, allowing for a clean way to gather user input and access said input later in the program. This project was also a way for me to understand the use of and implementation of tests. It was initially a challenge to match expected test output to generated output, mostly because the spacing must be precisely correct for them to match and return a pass to the test.

## Installation
This project requires node and inquirer to function properly. Node can be located at [Node](https://nodejs.org/en/). Inquirer can be found at [Inquirer.js](https://www.npmjs.com/package/inquirer/v/8.2.4) and downloaded.


## Usage
Once installed, the user needs to navigate to the folder with the '''index.js''' file in their code editor or terminal. Once there, the user needs to run '''node index.js''' in the terminal to begin the prompt section. The user needs to enter no more than three letters for the logo, select a color for the text, choose a shape, and select a color for the shape. The colors may be written in English or hexcodes can be used. At the end of the prompt section, the program will format the responses and then create the logo from said responses. The newly created logo can be found in the "Examples" folder.

A video walkthrough of the proper commands and their output can be found ![here](../Examples/SVG-Logo-Maker.mp4).

## License
This product is protected by a [MIT License](http://choosealicense.com/licenses/mit).

## Contributing
I, Alex Messina, authored this code completely. 

## Tests
This project has different test batteries in the "Tests" folder. Each test battery will check to ensure the Circle, Rectangle and Triangle classes are working to properly create objects, generate specifications to the logo, then creating the proper html code to make the SVG logo. 

## Questions
My GitHub username is [ExecutorKarthan](https://github.com/ExecutorKarthan) and this project can be found at [https://github.com/ExecutorKarthan/SVG-Logo-Maker](https://github.com/ExecutorKarthan/SVG-Logo-Maker)

If you have questions or concerns about this project, please email me at me@alexmessina.dev
