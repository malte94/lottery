import React from 'react'
import Ball from './Ball'

class Lottery extends React.Component {

    state = {
        nums: Array.from({length: this.props.numBalls})
    }

    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    async generate() {
        await this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }

    handleClick = () => {
        this.generate();
    }

    render() {
        return (
            <section className="lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <br />
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery
