class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
  }
}

class Rectangle extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
  }
}

class Ellipse extends Shape {
  render() {
    return `<ellipse cx="150" cy="100" rx="100" ry="60" fill="${this.color}" />`;
  }
}

class Star extends Shape {
  render() {
    return `<polygon points="150,30 180,90 240,90 195,135 210,195 150,165 90,195 105,135 60,90 120,90" fill="${this.color}" />`;
  }
}

class Heart extends Shape {
  render() {
    return `<path d="M150,50
                     C105,0,-42,50,60,120
                     L150,180
                     L240,120
                     C342,40,195,0,150,50
                     Z" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
  Rectangle,
  Ellipse,
  Star,
  Heart
};
