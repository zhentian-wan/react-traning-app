import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import Home from '../Home';
import { Screentwo } from '../Screentwo';
import { Summary } from '../Summary';

const styles = {
    headline : {
        fontSize     : 24,
        paddingTop   : 16,
        marginBottom : 12,
        fontWeight   : 400,
    },
};

class App extends Component {
    constructor(props) {
        super(props);
        this.onBoxSelected = this.onBoxSelected.bind(this);
        this.onAddBox      = this.onAddBox.bind(this);
        this.onRemoveBox   = this.onRemoveBox.bind(this);
        this.onBtnClick    = this.onBtnClick.bind(this);
        this.state         = {
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
    }

    handleChange = (value) => {
        this.setState({ value });
    };

    onBoxSelected(selectedBox) {
        this.setState({ selectedBox });
    }

    onAddBox() {
        const newBox = {
            id    : this.state.boxes.length,
            color : 'red'
        };

        this.setState({
                          boxes : [
                              ...this.state.boxes,
                              newBox
                          ]
                      });
    }

    onRemoveBox() {
        if( !this.state.selectedBox ) {
            this.setState({ boxes: this.removeLastBox(this.state.boxes) });
        } else {
            this.setState({
                              boxes       : this.removeSelectedBox(this.state.selectedBox, this.state.boxes),
                              selectedBox : null
                          });
        }
    }

    removeLastBox(boxes) {
        if( boxes.length ) {
            // Remove the last box
            return boxes.slice(0, -1);
        } else {
            return boxes;
        }
    }

    removeSelectedBox(selectedBox, boxes) {
        if( selectedBox ) {
            // Remove the selected box
            return boxes.filter((box) => selectedBox.id !== box.id);
        } else {
            return boxes;
        }
    }

    onBtnClick(color, box) {
        if( box ) {
            this.setState({ boxes : this.updateSelectedBoxColor(color, box, this.state.boxes) });
        }
    }

    updateSelectedBoxColor(color, selectedBox, boxes) {
        return boxes.map((box) => {
            if( selectedBox.id === box.id ) {
                box.color = color;
            }
            return box;
        });
    }

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Home" value="home">
                    <Home
                        boxes={this.state.boxes}
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