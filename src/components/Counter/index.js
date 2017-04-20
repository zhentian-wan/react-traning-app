//@flow

import React from 'react';
import {inc, dec, lensProp, over, evolve, multiply} from 'ramda';

// Using Lense
const countLens = lensProp('count');
const increase = over(countLens, inc);
const decrease = over(countLens, dec);
const doubleCount = evolve({count: multiply(2)});

export default class Counter extends React.Component {

    state = {
        count: 0
    };

    increase = () => this.setState(increase);

    decrease = () => this.setState(decrease);

    double = () => this.setState(doubleCount);

    render() {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                {this.state.count}
                <button onClick={this.decrease}>-</button>
                <button
                    disabled={this.state.count === 0}
                    onClick={this.double}
                >*2</button>
            </div>
        );
    }

}