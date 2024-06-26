import React, { Component } from 'react'

export default class Timer extends Component {

    //1. It is used to initialize component. It is used to initialize state value.
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    Tick = () => {
        this.setState({
            time: new Date()
        })
    }

    //3. It is called after component mount in the DOM. It is mostly used to fetch data from server.
    componentDidMount = () => {
        this.timeRef = setInterval(() => this.Tick(), 1000)
    }

    // 4. Update in DOM, props and state ma value change thya pchhi display thai
    //It is used to do some work when state/props value changed.
    componentDidUpdate = (PrevProps, PrevState) => {
        if (this.state.time !== PrevState) {
            console.log("componentDidUpdate called")
        }
    }

    // 5. it is used to reduse in DOM
    // it is called when component unmount from dom. It is used to realse occupied resourses.
    componentWillUnmount = () => {
        clearInterval(this.timeRef)
    }

    //2. It is used to display component. It is called every time when state value changed
    render() {
        return (
            <div>
                {/* object to convert string  */}
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}
