import React from 'react'
import { HashRouter as Router, Route, Link, Swritch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Topic from './Topic'

export default class Main extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topic">Topic</Link>
                        </li>
                    </ul>
                    <hr />

                    {this.props.children}

                </div>


            </Router>
        )
    }
}