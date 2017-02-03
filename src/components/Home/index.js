import React, { Component } from 'react';
import classnames from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from '../../router';

import Box from '../Box';

import './Home.css';
const style = {
    margin : 12,
};

/*
* Stateless Component
* */
const ActionBtns = ({onAddBox, onRemoveBox}) => (
    <nav className={classnames('nav')}>
        <RaisedButton
            label="Add"
            style={style}
            onClick={onAddBox}/>
        <RaisedButton
            label="Remove"
            style={style}
            onClick={onRemoveBox}/>
    </nav>
);


/*
* Stateful Component
* */
export default class Home extends Component {

    /* Public field*/
    handleClick = (box) => {
        this.props.onBoxSelected(box);
        // set current selected box
        this.setState({ current : box.id })
    };

    state = {
        current : null
    };

    /* Method */
    render() {
        const boxes = this.props.boxes.map((box, index) => {
            return (
                <Box
                    {...box}
                    onClick={() => this.handleClick(box)}
                    key={index}
                    highlight={this.state.current === box.id}/>
            );
        });
        return (
            <div className={classnames('Home')}>
                <ActionBtns
                    onAddBox={this.props.onAddBox}
                    onRemoveBox={this.props.onRemoveBox}/>
                <hr/>
                <div className={classnames('boxes')}>{boxes}</div>
                <pre className={classnames('desc')}>
                    There are {this.props.boxes && this.props.boxes.length} boxes.
                </pre>
                <pre>
                    <Link to={'/allgreen'}>Green</Link>
                    <Link to={'/allred'}>Red</Link>
                    <Link to={'/all'}>All</Link>
                </pre>
            </div>
        );
    }
}