import React from 'react';
import {Link, Route} from 'react-router-dom';

const Menu = () => (
    <div>
        <h1>Menu</h1>
        <Link to="/menu/food" >Food</Link>
        <Link to="/menu/drinks">Drinks</Link>
        <Link to="/menu/slides">Slides</Link>
        <Link to="/menu/xxxxx">Slides</Link>

        <Route path="/menu/:section" render={({match}) => {
            return <h3>Section: {match.params.section}</h3>
        }}>
        </Route>
    </div>
);

export default Menu;