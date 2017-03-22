import React from 'react';
import {Link, Route, Prompt} from 'react-router-dom';

const Home = () => (<h1>Home</h1>);
class Form extends React.Component {
    state = {
        dirty: false
    };

    setDirty = () => {
        this.setState((preState, props) => {
            return {
                dirty: true
            }
        })
    };

    render(){
        return(
            <div>
                <h1>Form</h1>
                <input type="text" onInput={this.setDirty}/>
                <Prompt
                    when={this.state.dirty}
                    message="Date will be lost"
                ></Prompt>
            </div>
        );
    }
}



const Guards = () => (
    <div>
        <Link to="/guards/home">Home</Link>
        <Link to="/guards/form">Form</Link>

        <Route path="/guards/home" component={Home}></Route>
        <Route path="/guards/form"
               component={Form}
        ></Route>
    </div>
);

export default Guards;