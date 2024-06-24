import React, { Component } from 'react'


// rcc => react class based component
export default class Country extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countryName: 'India',
            Population: '134 Billion'
        }
    }

    onChange = () => {
        this.setState(
            {
                countryName: 'UK',
                Population: '100 Billion'
            }
        )
    }

    render() {
        return (
            <div>
                <h1>React Country Class Component...</h1>
                <p>{this.state.countryName}</p>
                <p>{this.state.Population}</p>
                <button onClick={this.onChange}>Change Value</button>
            </div>
        )
    }
}
