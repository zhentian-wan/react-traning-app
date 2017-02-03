import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { addBox, removeSelected, removeLast, findById, updateBoxes, setColor, filterBoxes } from './AppHelper';

import Home from '../Home';
import { Screentwo } from '../Screentwo';
import { Summary } from '../Summary';

class App extends Component {

    /* Public fields */
    state = {
        value       : 'home',
        boxes       : [
            {
                id    : 0,
                color : 'red'
            },
            {
                id    : 1,
                color : 'red'
            },
            {
                id    : 2,
                color : 'red'
            },
            {
                id    : 3,
                color : 'red'
            },
            {
                id    : 4,
                color : 'red'
            },
            {
                id    : 5,
                color : 'green'
            },
            {
                id    : 6,
                color : 'green'
            }
        ],
        selectedBox : null
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
    };

    onRemoveBox = () => {
        let boxes;
        if( !this.state.selectedBox ) {
            boxes = removeLast(this.state.boxes);
            this.setState({ boxes });
        } else {
            boxes = removeSelected(this.state.boxes, this.state.selectedBox);
            this.setState({
                              boxes,
                              selectedBox : null
                          });
        }
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
    };

    handleChange = (value) => {
        this.setState({ value });
    };

    static contextTypes = {
        route: React.PropTypes.string
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
}

export default App;