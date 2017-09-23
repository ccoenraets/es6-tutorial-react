import React from 'react';
import AmortizationChart from './AmortizationChart';
import * as mortgage from './mortgage';

class MortgageCalculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            principal: this.props.principal,
            years: this.props.years,
            rate: this.props.rate
        };
    }

    principalChange(event) {
        this.setState({principal: event.target.value});
    }

    yearsChange(event) {
        this.setState({years: event.target.value});
    }

    rateChange(event) {
        this.setState({rate: event.target.value});
    }

    render() {
        // ES6: Object destructuring syntax
        let {monthlyPayment, amortization} = mortgage.calculatePayment(this.state.principal, this.state.years, this.state.rate);
        return (
            <div className="content">
                <div className="form">
                    <div>
                        <label>Principal:</label>
                        <input type="text" value={this.state.principal} onChange={this.principalChange.bind(this)}/>
                    </div>
                    <div>
                        <label>Years:</label>
                        <input type="text" value={this.state.years} onChange={this.yearsChange.bind(this)}/>
                    </div>
                    <div>
                        <label htmlFor="rate">Rate:</label>
                        <input type="text" value={this.state.rate} onChange={this.rateChange.bind(this)}/>
                    </div>
                </div>
                <h2>Monthly Payment: <span className="currency">{Number(monthlyPayment.toFixed(2)).toLocaleString()}</span></h2>
                <AmortizationChart data={amortization}/>
            </div>
        );
    }
};

export default MortgageCalculator;