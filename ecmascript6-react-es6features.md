---
layout: module
---
# 2. Using New ECMAScript 6 Features

## Step 1: Use New ECMAScript 6 Features

1. Open `js/app.js` in your favorite code editor

1.  Replace all `var` definitions with `let`

1. Replace all `React.createClass()` definitions with the new ECMAScript 6 class syntax. For example:

    ```
    class Header extends React.Component {
    
    };
    ```
    
1. Modify all class functions to use the ECMAScript 6 syntax for class function definitions. Use the `render()` function below as an example:

    ```
    class Header extends React.Component {
    
        render() {
            return (
                <header>
                    <h1>{this.props.title}</h1>
                </header>
            )
        }
    
    };
    ```

1. In MortgageCalculator, replace `getInitialState()` with a constructor:

    ```
    constructor(props) {
        super(props);
        this.state = {
            principal: this.props.principal,
            years: this.props.years,
            rate: this.props.rate
        };
    }
    ```
    
1. In the `render()` function of the MortgageCalculator class, bind the call to the change event handlers as follow:
     
     ```
     <input type="text" value={this.state.principal} 
            onChange={this.principalChange.bind(this)}/>
     ```

1. Replace all remaining `function()` definitions with arrow functions

1. Use Object Destructuring syntax when appropriate
    
## Step 2: Build and Run	

1. Build the app:

	```
	 npm run webpack
	```

1. Open **index.html** in your browser


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="ecmascript6-react-setup.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="ecmascript6-react-modules.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>