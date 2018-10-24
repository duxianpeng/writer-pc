import React from 'react'
import {Row, Col} from 'antd'
import CitiLogoImg from '../../images/logo-citi-small.png'
import './index.less'

export default class Footer extends React.Component {

    render(){
        return (
            <div className="footer">
                    <img className="footer__logo" src={CitiLogoImg}/>
                    <span className="footer__copyright">
                        Copyright © 2018 Citigroup Inc.
                    </span>
            </div>
        )
    }
}

