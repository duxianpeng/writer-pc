import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {

    render(){
        return (
            <div>
                Home<br/>
                <Link to="/home/123">Info</Link>
                {this.props.children}
            </div>
        )
    }
}