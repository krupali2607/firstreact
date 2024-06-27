// rfs
import React, { useState, useEffect } from 'react';

function TimerFunc(props) {
    //1.
    const [time, setTime] = useState(new Date());


    const tick = () => {
        setTime(new Date());
    }

    //3. componentDidMount
    useEffect(() => {
        const timeRef = setInterval(tick, 1000);

        // componentWillUnmount
        return () => {
            clearInterval(timeRef);
        }

        // componentDidUpdate[] In this bracket 
    }, []);

    return (
        <div>
            {/* 2. Print data */}
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimerFunc;