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
- `$ yarn add babel-preset-env babel-preset-react --dev`=

## Step 2!
- Let's add in Webpack
- `$ yarn add webpack babel-loader`

## Step 3!
- Lets add some Webpack plugins
- `$ yarn add copy-webpack-plugin html-webpack-plugin --dev`
- Copy plugin - to move files
- HTML plugin - to inject (dynamic)
- LoaderOptionsPlugin - Webpack options
- Define plugin - to replace strings (super useful later!)

## Step 4!
- Lets add React and ReactDOM as required deps
- Let's bring in a CSS-loader to get rid of the Copy
- `$ yarn add react react-dom`
- `$ yarn add style-loader css-loader --dev`

## Step 5!
- Let's add in webpack-dev-server
- `$ yarn add webpack-dev-server --dev`

## Step 6!
- Let's prepare this for production
- `$ yarn add cross-env --dev`
- Cross Env for platform parity
- Let's clean build
- `$ yarn add rimraf --dev`

## Explanations!
### Babel
- Javascript transpiler!
- Walks and transforms the AST
- Uses presets and plugins to transform the source code

### Webpack
- Module bundler for Javascript ecosystem
- Lets us put together files in `node_modules` with our app `src` to create new builds
- Needs a `webpack.config` file
