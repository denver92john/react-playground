import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    };
    componentDidMount() {
        
        this.interval = setInterval(() => {
            console.log(`count before setState: ${this.state.count}`);
            this.setState({
                count: this.state.count + 1
            })
            console.log(`count after setState: ${this.state.count}`);
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    renderDisplay() {
        const {count} = this.state;
        if (count >= 8) {
            clearInterval(this.interval)
            return 'BOOM'
        } else if (count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
    }
    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
            </div>
        );
    }
}

export default Bomb;