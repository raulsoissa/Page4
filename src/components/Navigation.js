import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <p className="text-light h3 ml-5">{this.props.titulo}</p>
                </nav>
            </div>
        )
    }
}
