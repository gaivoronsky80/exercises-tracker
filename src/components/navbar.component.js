import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
                <div className="container">
                    <Link to='/' className="navbar-brand">ExercisesTracker</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse-cancel d-sm-inline-flex flex-sm-row-reverse" id="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Exercises<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/create' className="nav-link">Create Exercise Log</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/user' className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
