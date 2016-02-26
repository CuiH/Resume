# Resume Generator
A small and light-weight resume generator based on Jade (a HTML pre-compile language) and YAML(a clean markup language). Using this generator, a static web page of your resume is built quickly with just only one command `node index.js`.

![screenshot](https://raw.githubusercontent.com/yickli/Resume/master/screenshot.png)

## Usage
1. Download and install dependencies. Ensuring you have already installed Node.js.
  
  ```bash
  npm install
  ```
2. After modification of `data.yml`, run command below in the project directory. This command will generate a HTML file `index.html` in `./dist` directory.
  
  ```bash
  node index.js
  ```
3. Your resume will be showed in your default browser.

## Features

- Clean grammar of YAML. No ugly tags and extra curly braces or quotes.
- Easy to use. All you have to do are filling the `data.yml` and running the simple command.
- Themes. More themes will be designed and developed in the future.

## Example
Demo - [My Resume](http://yickli.github.io/Resume).
## License
Resume Generator is released under the MIT license. See LICENCE for details.