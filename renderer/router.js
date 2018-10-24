import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Main from './pages/main'
import Home from './pages/home'
import Bill from './pages/bill'

export default class AppRouter extends React.Component{
    render(){
        return (
            <Router>
               <Main>
                 <Route path="/home" component={Home}/>
                 <Route path="/bill" component={Bill}/>
                </Main>
            </Router>
        )
    }
}

