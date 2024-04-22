# Webpack

https://webpack.js.org/guides 


### 1. package.json

- **dependencies** : Packages required by your application in production, add using **--save-prod** - default

- **devDependencies** : Packages that are only needed for local development and testing, add using **--save-dev**


### 2. webpack.config.js

Cleaning up the out folder: ``` clean: true ```

**mode**

- development:  Enables useful names for modules and chunks.

- production: Enables deterministic mangled names for modules and chunks

If not set, webpack sets production as the default value for mode.

**html-webpack-plugin** - generates an HTML file for your application and automatically injects all your generated bundles into this file.


### 3. Webpack Loaders

Webpack enables use of loaders to preprocess files. This allows you to bundle any static resource way beyond JavaScript.

Transpiling

  - **babel-loader** : Loads ES2015+ code and transpiles to ES5 using Babel

  - **esbuild-loader** : Loads ES2015+ code and transpiles to ES6+ using esbuild

  - **buble-loader** : Loads ES2015+ code and transpiles to ES5 using Bublé

  - **traceur-loader** : Loads ES2015+ code and transpiles to ES5 using Traceur

  - **ts-loader** : Loads TypeScript 2.0+ like JavaScript

  - **coffee-loader** : Loads CoffeeScript like JavaScript

  - **fengari-loader** : Loads Lua code using fengari

  - **elm-webpack-loader** : Loads Elm like JavaScript

  Styling

 - **style-loader** : Add exports of a module as style to DOM

 - **css-loader** : Loads CSS file with resolved imports and returns CSS code

 - **less-loader** : Loads and compiles a LESS file

 - **sass-loader** : Loads and compiles a SASS/SCSS file

 - **postcss-loader** : Loads and transforms a CSS/SSS file using PostCSS

 - **stylus-loader** :  Loads and compiles a Stylus file