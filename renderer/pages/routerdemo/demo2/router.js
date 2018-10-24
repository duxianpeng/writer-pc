import React from 'react'
import { HashRouter as Router, Route, Link, Swritch } from 'react-router-dom'
import Main from './Main'
import Home from './Home'
import About from './About'
import Topic from './Topic'
import Info from './Info'
export default class MyRouter extends React.Component{
    render(){
        return (
            <Router>
               <Main>
               <Route path="/home" render={()=>
                        <Home>
                            <Route path="/home/:value" component={Info}/>
                        </Home>
                }/>
                <Route path="/about" component={About}/>
                <Route path="/topic" component={Topic}/>
                </Main>
            </Router>
        )
    }
}