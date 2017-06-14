# Webpack + React workshop - June 14th 2017

## Getting started
- Run `$ python -m SimpleHTTPServer 9999` from this root folder and navigate to http://localhost:9999/src

## Initial problems
1. We are forced to use `React.createElement`
2. All our code needs to be in a single file
3. Not a very great dev experience

## Step 1!
- Let's add in Babel
- `$ yarn add babel-cli babel-core --dev`
- `$ yarn add babel-preset-env babel-preset-react --dev`

## Explanations!
### Babel
- Javascript transpiler!
- Walks and transforms the AST
- Uses presets and plugins to transform the source code
