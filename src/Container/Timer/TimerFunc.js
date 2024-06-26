// rfs
import React, { useState, useEffect } from 'react';


function TimerFunc(props) {

    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {
        const timeRef = setInterval(tick, 1000);
    });

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimerFunc;