import React, { Component } from 'react'

export default class Fees extends Component {
    render() {
        let fees = '';
        switch (this.props.con) {
            case 'Web Design':
                fees = '50,000';
                break;
            case 'Full stack':
                fees = '80,000';
                break;
            case 'Android Developer':
                fees = '45,000';
                break;
            case 'React':
                fees = '50,000';
                break;

            default:
                fees = '';
                break;
        }
        return (
            <>
                <h4>{this.props.con} : {fees}</h4>
            </>
        )
    }
}
