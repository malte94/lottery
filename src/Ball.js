import React from 'react'

class Ball extends React.Component {

    state = {

    }

    static defaultProps = {

    }

    render() {
        return (
            <div className="ball">{this.props.num}</div>
        )
    }
}

export default Ball
