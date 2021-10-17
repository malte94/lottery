import React from 'react'

/* _____________________ Styles _____________________ */
import './App.css'
/* __________________________________________________ */

/* ___________________ Components ___________________ */
import Ball from './Ball';
/* __________________________________________________ */

class App extends React.Component {

    state = {
        welcome: 'Welcome!'
    }

    static defaultProps = {
        //
    }

    asyncBindedFunction = async() => {
        await this.setState({welcome: "Welcome to the Default App!!"});
    }

    render() {
        return (
        <div className="App">
            <Ball num={17} />
        </div>
        )
    }
}

export default App
