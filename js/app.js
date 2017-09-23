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
