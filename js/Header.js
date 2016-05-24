import React from 'react';

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

export default Header;