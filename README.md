# SVGuru

SVGuru is a Node.js command-line application that empowers users to effortlessly craft custom SVG logos with text and shapes.


## Features

- Prompt user for text (up to three letters)
- Prompt user for text color (color keyword or hexadecimal)
- Prompt user to choose a shape (circle, triangle, square, rectangle, ellipse, star, heart)
- Prompt user for shape color (color keyword or hexadecimal)
- Generate an SVG file based on user input
- Save the generated SVG file as `logo.svg`


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/macbetthh/svguru.git
&nbsp; 

2. Navigate to the project directory:
   ```sh
   cd svguru
&nbsp; 

3. Install the dependencies:
   ```sh
   npm install
### Dependencies

- inquirer: Latest version (specified in `package.json`)
- colors: Latest version (specified in `package.json`)

### Dev Dependencies

- jest: Latest version (specified in `package.json`)
&nbsp; 

## Testing

- Test files are located in the `tests` directory. Run the tests using Jest: 
    ```sh
    npm test
&nbsp; 

## Usage

- Run the application 
   ```sh 
   node index.js
- Follow the prompts to create your custom SVG logo. The generated SVG file will be saved as `logo.svg` in `examples` in the project directory.
&nbsp; 
- **Pro Tip**: I use the `SVG Preview` Extension on VS Code to see my SVG files immediately -- I recommend using it or one like it if you'd rather see it directly in the editor instead of in a browser or by opening another program! :)




## License
Please refer to the LICENSE in the repo.

## Credits

- Developer: me 💁🏼‍♀️
- [SVG Path help](https://svg-path.com/) for star and heart (minor math adjustments by me)
