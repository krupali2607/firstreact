import React, { Component } from 'react'

export default class City extends Component {
    render() {
        return (
            <div>
                <p>{this.props.countryName}</p>
            </div>
        )
    }
}
