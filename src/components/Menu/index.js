import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const Menu = () => (
    <div>
        <h1>Menu</h1>
        <Link to="/menu/food">Food</Link>
        <Link to="/menu/drinks">Drinks</Link>
        <Link to="/menu/123">Nothing</Link>

        <Route path="/menu/:section([a-z]+)" render={({ match }) => {
            return <h3>Section: {match.params.section}</h3>
        }}>
        </Route>
        <Route path="/menu/:section(\d+)" render={({ match }) => {
            return <Redirect to="/menu/food"></Redirect>
        }}></Route>
    </div>
);

export default Menu;