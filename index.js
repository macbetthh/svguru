const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors'); // Correctly require colors
const path = require('path');
const {
  generateCircle,
  generateTriangle,
  generateSquare,
  generateRectangle,
  generateEllipse,
  generateStar,
  generateHeart
} = require('./tests/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for your logo:'.cyan,
    validate: input => input.length <= 3 || 'Text must be three characters or less'.red
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal):'.cyan
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for your logo:'.cyan,
    choices: ['circle', 'ellipse', 'heart', 'rectangle', 'square', 'star', 'triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal):'.cyan
  }
];

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement;

  switch (shape) {
    case 'circle':
      shapeElement = generateCircle(shapeColor);
      break;
    case 'triangle':
      shapeElement = generateTriangle(shapeColor);
      break;
    case 'square':
      shapeElement = generateSquare(shapeColor);
      break;
    case 'rectangle':
      shapeElement = generateRectangle(shapeColor);
      break;
    case 'ellipse':
      shapeElement = generateEllipse(shapeColor);
      break;
    case 'star':
      shapeElement = generateStar(shapeColor);
      break;
    case 'heart':
      shapeElement = generateHeart(shapeColor);
      break;
    default:
      shapeElement = '';
  }

  // Adjust text position specifically for the star
  const textYPosition = shape === 'star' ? '140' : '115';

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="150" y="${textYPosition}" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

inquirer.prompt(questions).then(answers => {
  const svgContent = generateSVG(answers);

  // makes sure example folder didn't disappear into the void
  const examplesDir = path.join(__dirname, 'examples');
  if (!fs.existsSync(examplesDir)) {
    fs.mkdirSync(examplesDir);
  }

  // svg file will go to example folder
  const filePath = path.join(examplesDir, 'Generated_Logo.svg');
  fs.writeFileSync(filePath, svgContent);
  console.log(`Find your newly generated file here: ${filePath}`.green);
});
