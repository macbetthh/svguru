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
  return `<polygon points="150, 25 179, 111 269, 111 197, 165 223, 251 150, 200 77, 251 103, 165 31, 111 121, 111" fill="${color}" />`;
}


function generateHeart(color) {
  return `<path d="M150 30
                   C 100 0, 50 0, 50 70
                   C 50 130, 150 180, 150 250
                   C 150 180, 250 130, 250 70
                   C 250 0, 200 0, 150 30
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
