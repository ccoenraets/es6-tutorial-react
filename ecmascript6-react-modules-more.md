---
layout: module
---
# 4. Creating the MortgageCalculator Module

In this unit, you create the MortgageCalculator module as well as the modules it depends on.

## Step 1: Create the mortgage Module

1. Create a new file named `mortgage.js` in the `js` directory. 
 
1. Move the `calculatePayment()` function from `app.js` into `mortgage.js`.

1. Add `export` in front of the function definition ro make it available as part of the module public API:

    ```
    export let calculatePayment = (principal, years, rate) => {
    ```


## Step 2: Create the AmortizationChart Module

1. Create a new file named `AmortizationChart.js` in the `js` directory. 

1. Import the react module:

    ```
    import React from 'react';
    ```

1. Move the `AmortizationChart` class definition from `app.js` into `AmortizationChart.js`.

1. At the bottom of the file, export the class as the default export:
 
    ```
    export default AmortizationChart;
    ````


## Step 3: Create the MortgageCalculator Module


1. Create a new file named `MortgageCalculator.js` in the `js` directory. 

1. Add the following import statements:

    ```
    import React from 'react';
    import AmortizationChart from './AmortizationChart';
    import * as mortgage from './mortgage';
    ```

1. Move the `MortgageCalculator` class definition from `app.js` into `MortgageCalculator.js`.

1. In the `render()` function, change `calculatePayment()` to `mortgage.calculatePayment()`

1. At the bottom of the file, export the class as the default export:
 
    ```
    export default MortgageCalculator;
    ````


1. Open `app.js` and add an import statement for the MortgageCalculator module

    ```
    import MortgageCalculator from './MortgageCalculator';
    ```

    `app.js` should now look like this:
    
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Header from './Header';
    import MortgageCalculator from './MortgageCalculator';
    
    class App extends React.Component {
    
        render() {
            return (
                <div>
                    <Header title="React ES6 Mortgage Calculator"/>
                    <MortgageCalculator principal="200000" years="30" rate="5"/>
                </div>
            );
        }
    
    };
    
    ReactDOM.render(<App/>, document.getElementById("app"));
    ```

## Step 3: Build and Run

1. Build the application:

	```
    npm run webpack
	```

1. Open **index.html** in your browser
	
	
<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="ecmascript6-react-modules.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
</div>
</div>

