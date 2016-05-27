---
layout: module
---
# 1. Setting Up a React Project

In this unit, you set up a development environment to develop a React application using ECMAScript 6.

## Step 1: Install the Sample Application

1. Clone the [es6-tutorial-react](https://github.com/ccoenraets/es6-tutorial-react/):

	```
	git clone https://github.com/ccoenraets/es6-tutorial-react
	```

	> Alternatively, you can just download and unzip [this file](https://github.com/ccoenraets/es6-tutorial-react/archive/master.zip) instead of cloning the repository.
	
1. Open ```app.js``` and familiarize yourself with the application	


## Step 2: Set Up Babel and Webpack

1. Open a command prompt, and navigate (`cd`) to the `es6-tutorial-react` directory.

1. Type the following command to create a `package.json` file:

    ```
    npm init
    ```

    Press the **Return** key in response to all the questions to accept the default values.
     

1. Type the following command to install the **react** and **react-dom** modules:

	```
	npm install react react-dom --save-dev
	```
	
1. Type the following command to install the **babel-core**, **babel-loader** and **webpack** modules:

	```
	npm install babel-core babel-loader webpack --save-dev
	```
	
1. Type the following command to install the **ECMAScript 2015** and **React** presets:

	```
	npm install babel-preset-es2015 babel-preset-react --save-dev
	```
	
1. In the `es6-tutorial-react` directory, create a new file named `webpack.config.js` defined as follows:
     
     ```
     var path = require('path');
     var webpack = require('webpack');
     
     module.exports = {
         entry: './js/app.js',
         output: {
             path: path.resolve(__dirname, 'build'),
             filename: 'app.bundle.js'
         },
         module: {
             loaders: [
                 {
                     test: /\.js$/,
                     loader: 'babel-loader',
                     query: {
                         presets: ['es2015', 'react']
                     }
                 }
             ]
         },
         stats: {
             colors: true
         },
         devtool: 'source-map'
     };
     ```
	
1. Open `package.json` in your favorite code editor. In the `scripts` section, remove the **test** script, and add a script named **webpack**. The `scripts` section should now look like this:

	```
	"scripts": {
        "webpack": "webpack"
	},
	```

1. In the `es6-tutorial-react` directory, create a `build` directory to host the compiled version of the application.
	
## Step 3: Build and Run	


1. On the command line, make sure you are in the `es6-tutorial-react` directory, and type the following command to run the **webpack** script and compile app.js:

	```
    npm run webpack
	```

1. Open **index.html** in your browser

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="ecmascript6-react-es6features.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
