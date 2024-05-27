# SVGuru

SVGuru is a Node.js command-line application that empowers users to effortlessly craft custom SVG logos with text and shapes.


## Features

- Prompt user for text (up to three letters)
- Prompt user for text color (color keyword or hexadecimal)
- Prompt user to choose a shape (circle, triangle, square, rectangle, ellipse, star, heart)
- Prompt user for shape color (color keyword or hexadecimal)
- Generate an SVG file based on user input
- Save the generated SVG file as `logo.svg`


## Video Walkthroughs/Previews
*Apologies for 3 videos! I used OBS and forgot to change to a display capture instead of window capture. Also, smaller file sizes this way ;)*

[**Test Preview**](https://drive.google.com/file/d/1bzjRYbOyvtbBMCi6UM9N0Q1d_9kmVYoO/view?usp=sharing)
https://github.com/macbetthh/svguru/assets/143623621/b0c9b662-df70-4061-a660-07d6fab82860


[**User Input Walktrhough**](https://drive.google.com/file/d/199P_wu3bKgLl8Jw2b6w0Glv84mapdDR7/view?usp=sharing)
*Link takes you to regular speed video*
https://github.com/macbetthh/svguru/assets/143623621/040f533e-9fdc-402b-828e-f9339aa0050a


[**SVG in Browser**](https://drive.google.com/file/d/1o7_T6zbrB3fQuXlkL6I4hQMmKBLdbzjU/view?usp=sharing)
https://github.com/macbetthh/svguru/assets/143623621/f61e653c-2983-4de5-8253-b6e665864849

&nbsp; 

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


&nbsp; 

## Shape Classes
This project includes classes for different shapes (Circle*, Triangle*, Square*, Rectangle, Ellipse, Star, Heart). 
Each class has a render method that returns a string representing the SVG element for the shape.

**Required shapes - other shapes added to challenge myself😇*
&nbsp; 

## License
Please refer to the LICENSE in the repo.
&nbsp; 
## Credits

- Developer: me 💁🏼‍♀️
- [SVG Path help](https://svg-path.com/) for star and heart (minor math adjustments by me)
