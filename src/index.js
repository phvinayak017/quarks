import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Home';
import Giphy from './Components/Giphy';

const routing = (
    <Router>
        <div className='logo'>
            <ul>
                <NavLink className='quarks' exact to='/'>
                    Quarks
                </NavLink>
            </ul>
            <ul className='nav'>
                <li>
                    <NavLink className='home' exact to='/home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className='giphy' to='/giphy'>
                        Giphy
                    </NavLink>
                </li>
            </ul>
        </div>
        <Route exact path='/' component={App} />
        <Route exact path='/home' component={Home} />
        <Route path='/giphy' component={Giphy} />

    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
