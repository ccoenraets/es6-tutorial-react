---
layout: module
---
# 3. Creating the Header Module

In this unit, you externalize the Application Header in a module.

## Step 1: Create the Header Module

1. Create a new file named `Header.js` in the `js` directory.

1. Import the `react` module:

    ```
    import React from 'react';
    ```
 
1. Move the `Header` class definition from `app.js` into `Header.js`.

1. At the bottom of the file, export the class as the default export:
 
    ```
    export default Header;
    ````


## Step 2: Use the Header Module


1. In `app.js` make sure you removed the `Header` class definition
    
1. Add an `import` statement at the top of the file to import the newly created Header module: 

    ```
    import Header from './Header';
    ```

## Step 3: Build and Run

1. Build the app:

	```
    npm run webpack
	```

1. Open **index.html** in your browser
	

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="ecmascript6-react-es6features.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="ecmascript6-react-modules-more.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>

