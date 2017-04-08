import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import { addBox, removeSelected, removeLast, findById, updateBoxes, setColor, filterBoxes } from './AppHelper';
import { loadBoxes, createBox, saveBox, deleteBox } from '../../lib/boxes.service';
import Home from '../Home';
import { Screentwo } from '../Screentwo';
import { Summary } from '../Summary';

class App extends Component {

    /* Public fields */
    state = {
        value       : 'home',
        boxes       : [],
        selectedBox : null,
        message     : ''
    };

    onBoxSelected = (selectedBox) => {
        this.setState({ selectedBox });
    };

    onAddBox = () => {
        const newBox = {
            id    : this.state.boxes.length,
            color : 'red'
        };

        const boxes = addBox(this.state.boxes, newBox);

        this.setState({ boxes });

        createBox(newBox)
        .then(() => this.showTempMessage('Box added'));
    };

    showTempMessage = (message) => {
        this.setState({ message });
        setTimeout(() => {
            this.setState({ message : '' });
        }, 2000);
    };

    onRemoveBox = () => {
        let boxes, id;
        if( !this.state.selectedBox ) {
            id = this.state.boxes[this.state.boxes.length - 1].id;
            boxes = removeLast(this.state.boxes);
            this.setState({ boxes });
        } else {
            id = this.state.selectedBox.id;
            boxes = removeSelected(this.state.boxes, this.state.selectedBox);
            this.setState({
                              boxes,
                              selectedBox : null
                          });
        }

        deleteBox(id).then(() => this.showTempMessage('Box deleted'));
    };

    onBtnClick = (color, id) => {
        // find box by id
        const box          = findById(id, this.state.boxes);
        // toggle color
        const updatedBox   = setColor(color, box);
        // update boxes
        const updatedBoxes = updateBoxes(updatedBox, this.state.boxes);
        // set state
        this.setState({
                          boxes       : updatedBoxes,
                          selectedBox : updatedBox
                      });

        saveBox(updatedBox)
            .then(() => this.showTempMessage('Box updated'));
    };

    handleChange = (value) => {
        this.setState({ value });
    };

    static contextTypes = {
        route : PropTypes.string
    };

    /* Methods */
    render() {

        const displayBoxes = filterBoxes(this.state.boxes, this.context.route);
        return (

            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Home" value="home">
                    <div className="message">
                        {this.state.message}
                    </div>
                    <Home
                        boxes={displayBoxes}
                        onBoxSelected={this.onBoxSelected}
                        onAddBox={this.onAddBox}
                        onRemoveBox={this.onRemoveBox}
                    />
                </Tab>
                <Tab label="Screen two" value="screentwo">
                    <Screentwo
                        selectedBox={this.state.selectedBox}
                        onBtnClick={this.onBtnClick}
                    />
                </Tab>
                <Tab label="Summary" value="summary">
                    <Summary
                        total={this.state.boxes.length}
                        selectedBox={this.state.selectedBox}
                    />
                </Tab>
            </Tabs>
        );
    }

    componentDidMount() {
        loadBoxes()
        .then(boxes => this.setState({ boxes }));
    }
}

export default App;