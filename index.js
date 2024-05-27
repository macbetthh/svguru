const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors'); // Correctly require colors
const path = require('path');
const {
  Circle,
  Triangle,
  Square,
  Rectangle,
  Ellipse,
  Star,
  Heart
} = require('./tests/shapes');

console.log('Hello! SVGuru here to help you create your own custom SVG logo!'.rainbow);
console.log('Answer a few short questions and your logo will be generated for you in the examples folder!'.magenta);

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three letters for your logo:'.cyan,
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
      shapeElement = new Circle(shapeColor).render();
      break;
    case 'triangle':
      shapeElement = new Triangle(shapeColor).render();
      break;
    case 'square':
      shapeElement = new Square(shapeColor).render();
      break;
    case 'rectangle':
      shapeElement = new Rectangle(shapeColor).render();
      break;
    case 'ellipse':
      shapeElement = new Ellipse(shapeColor).render();
      break;
    case 'star':
      shapeElement = new Star(shapeColor).render();
      break;
    case 'heart':
      shapeElement = new Heart(shapeColor).render();
      break;
    default:
      shapeElement = '';
  }

  let textYPosition = '115'; // Default position
  if (shape === 'star') {
    textYPosition = '140';
  } else if (shape === 'triangle') {
    textYPosition = '130';
  }

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
  const filePath = path.join(examplesDir, 'logo.svg');
  fs.writeFileSync(filePath, svgContent);
  console.log(`Find your newly generated file here: ${filePath}`.green);
});
