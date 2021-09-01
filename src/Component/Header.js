import React from "react";
import './header.css'

class Header extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {}
    }

    render() {
        return (
            <div id="header">
                <input placeholder="Search"/>
            </div>
        )
    } 

}

export default Header;
