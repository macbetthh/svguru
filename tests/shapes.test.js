const {
  Circle,
  Triangle,
  Square,
  Rectangle,
  Ellipse,
  Star,
  Heart
} = require('./shapes');

describe('Shape Generation Functions', () => {
  test('generateCircle creates correct SVG for a circle', () => {
    const color = 'red';
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
    expect(new Circle(color).render()).toBe(expectedSVG);
  });

  test('generateTriangle creates correct SVG for a triangle', () => {
    const color = 'green';
    const expectedSVG = `<polygon points="150, 20 280, 180 20, 180" fill="${color}" />`;
    expect(new Triangle(color).render()).toBe(expectedSVG);
  });

  test('generateSquare creates correct SVG for a square', () => {
    const color = 'blue';
    const expectedSVG = `<rect x="70" y="20" width="160" height="160" fill="${color}" />`;
    expect(new Square(color).render()).toBe(expectedSVG);
  });

  test('generateRectangle creates correct SVG for a rectangle', () => {
    const color = 'yellow';
    const expectedSVG = `<rect x="50" y="50" width="200" height="100" fill="${color}" />`;
    expect(new Rectangle(color).render()).toBe(expectedSVG);
  });

  test('generateEllipse creates correct SVG for an ellipse', () => {
    const color = 'purple';
    const expectedSVG = `<ellipse cx="150" cy="100" rx="100" ry="60" fill="${color}" />`;
    expect(new Ellipse(color).render()).toBe(expectedSVG);
  });

  test('generateStar creates correct SVG for a star', () => {
    const color = 'pink';
    const expectedSVG = `<polygon points="150,30 180,90 240,90 195,135 210,195 150,165 90,195 105,135 60,90 120,90" fill="${color}" />`;
    expect(new Star(color).render()).toBe(expectedSVG);
  });

  test('generateHeart creates correct SVG for a heart', () => {
    const color = 'black';
    const expectedSVG = `<path d="M150,50
                     C105,0,-42,50,60,120
                     L150,180
                     L240,120
                     C342,40,195,0,150,50
                     Z" fill="${color}" />`;
    expect(new Heart(color).render()).toBe(expectedSVG);
  });
});
