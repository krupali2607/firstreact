import React, { Component } from 'react'
import Fees from '../Fees/Fees';

export default class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCourse: ''
        }
    }

    handleChange = (event) => {
        this.setState({ selectCourse: event.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div>
                    <select name="" id="Course" onChange={this.handleChange} value={this.state.selectCourse}>
                        <option value="Select Course">Select Course</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Full stack">Full stack</option>
                        <option value="Android Developer">Android Developer</option>
                        <option value="React">React</option>
                    </select>

                    <Fees con = {this.state.selectCourse}/>
                </div>
            </>
        )
    }
}
