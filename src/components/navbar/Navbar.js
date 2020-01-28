import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ul >
                    <li>Home</li>
                    <li>Conttact</li>
                    <li>About</li>

                </ul>

            </div>
        )
    }
}
export default Navbar;