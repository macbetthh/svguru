function generateCircle(color) {
  return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
}

function generateTriangle(color) {
  return `<polygon points="150, 20 280, 180 20, 180" fill="${color}" />`;
}

function generateSquare(color) {
  return `<rect x="70" y="20" width="160" height="160" fill="${color}" />`;
}

function generateRectangle(color) {
  return `<rect x="50" y="50" width="200" height="100" fill="${color}" />`;
}

function generateEllipse(color) {
  return `<ellipse cx="150" cy="100" rx="100" ry="60" fill="${color}" />`;
}

function generatePentagon(color) {
  return `<polygon points="150, 30 195, 100 150, 170 105, 100" fill="${color}" />`;
}

function generateHexagon(color) {
  return `<polygon points="150, 30 190, 75 150, 120 110, 75" fill="${color}" />`;
}

function generateStar(color) {
  return `<polygon points="150,30 180,90 240,90 195,135 210,195 150,165 90,195 105,135 60,90 120,90" fill="${color}" />`;
}


function generateHeart(color) {
  return `<path d="M150,50
                     C105,0,-42,50,60,120
                     L150,180
                     L240,120
                     C342,40,195,0,150,50
                     Z"
              fill="${color}" />`;
}


module.exports = {
  generateCircle,
  generateTriangle,
  generateSquare,
  generateRectangle,
  generateEllipse,
  generatePentagon,
  generateHexagon,
  generateStar,
  generateHeart
};
