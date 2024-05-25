
const {
  generateCircle,
  generateTriangle,
  generateSquare,
  generateRectangle,
  generateEllipse,
  generatePentagon,
  generateHexagon,
  generateStar,
  generateHeart
} = require('./shapes');
  
  describe('Shape Generation Functions', () => {
    test('generateCircle creates correct SVG for a circle', () => {
      const color = 'red';
      const expectedSVG = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
      expect(generateCircle(color)).toBe(expectedSVG);
    });
  
    test('generateTriangle creates correct SVG for a triangle', () => {
      const color = 'green';
      const expectedSVG = `<polygon points="150, 20 280, 180 20, 180" fill="${color}" />`;
      expect(generateTriangle(color)).toBe(expectedSVG);
    });
  
    test('generateSquare creates correct SVG for a square', () => {
      const color = 'blue';
      const expectedSVG = `<rect x="70" y="20" width="160" height="160" fill="${color}" />`;
      expect(generateSquare(color)).toBe(expectedSVG);
    });
  
    test('generateRectangle creates correct SVG for a rectangle', () => {
      const color = 'yellow';
      const expectedSVG = `<rect x="50" y="50" width="200" height="100" fill="${color}" />`;
      expect(generateRectangle(color)).toBe(expectedSVG);
    });
  
    test('generateEllipse creates correct SVG for an ellipse', () => {
      const color = 'purple';
      const expectedSVG = `<ellipse cx="150" cy="100" rx="100" ry="60" fill="${color}" />`;
      expect(generateEllipse(color)).toBe(expectedSVG);
    });
  
    test('generatePentagon creates correct SVG for a pentagon', () => {
      const color = 'orange';
      const expectedSVG = `<polygon points="150, 30 195, 100 150, 170 105, 100" fill="${color}" />`;
      expect(generatePentagon(color)).toBe(expectedSVG);
    });
  
    test('generateHexagon creates correct SVG for a hexagon', () => {
      const color = 'cyan';
      const expectedSVG = `<polygon points="150, 30 190, 75 150, 120 110, 75" fill="${color}" />`;
      expect(generateHexagon(color)).toBe(expectedSVG);
    });
  
    test('generateStar creates correct SVG for a star', () => {
      const color = 'pink';
      const expectedSVG = `<polygon points="150, 25 179, 111 269, 111 197, 165 223, 251 150, 200 77, 251 103, 165 31, 111 121, 111" fill="${color}" />`;
      expect(generateStar(color)).toBe(expectedSVG);
    });
  
    test('generateHeart creates correct SVG for a heart', () => {
      const color = 'black';
      const expectedSVG = `<path d="M150 30 L75 150 A50 50 0 1 1 225 150 Z" fill="${color}" />`;
      expect(generateHeart(color)).toBe(expectedSVG);
    });
  });
  