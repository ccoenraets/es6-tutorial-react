import React from 'react';
import ReactDOM from 'react-dom';

let calculatePayment = (principal, years, rate) => {
    let monthlyRate = rate / 100 / 12;
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
    let balance = principal;
    let amortization = [];
    for (let y=0; y<years; y++) {
        let interestY = 0;  //Interest payment for year y
        let principalY = 0; //Principal payment for year y
        for (let m=0; m<12; m++) {
            let interestM = balance * monthlyRate;       //Interest payment for month m
            let principalM = monthlyPayment - interestM; //Principal payment for month m
            interestY = interestY + interestM;
            principalY = principalY + principalM;
            balance = balance - principalM;
        }
        // ES6: Object creation shorthand
        amortization.push({principalY, interestY, balance});
    }
    return {monthlyPayment, amortization};
};

class Header extends React.Component {

    // ES6: Arrow function shorthand when function consists of single line return statement
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        )
    }

};

class AmortizationChart extends React.Component {
    render() {
        // ES6: Arrow function shorthand when function consists of single line return statement
        let items = this.props.data.map((year, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td className="currency principal">{Math.round(year.principalY).toLocaleString()}</td>
                <td className="stretch">
                    <div className="flex">
                        <div className="bar principal" style={{flex: year.principalY, WebkitFlex: year.principalY}}></div>
                        <div className="bar interest" style={{flex: year.interestY, WebkitFlex: year.interestY}}></div>
                    </div>
                </td>
                <td className="currency interest">{Math.round(year.interestY).toLocaleString()}</td>
                <td className="currency">{Math.round(year.balance).toLocaleString()}</td>
            </tr>
        );
        return (
            <table>
                <thead>
                <tr>
                    <th>Year</th>
                    <th className="principal">Principal</th>
                    <th className="stretch"></th>
                    <th className="interest">Interest</th>
                    <th>Balance</th>
                </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
};

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
        let {monthlyPayment, amortization} = calculatePayment(this.state.principal, this.state.years, this.state.rate);
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
