import React, { useState } from 'react'


// rfc => React function based component
const CountryFun = () => {
    const [country, setCountry] = useState('India')
    const [population, setPopulation] = useState('35 Billion')

    function updateValue() {
        setCountry('Canada')
        setPopulation('20 Billion')
    }

    return (
        <div>
            <h1>React Function Based Component</h1>
            <h2>Name:{country}</h2>
            <h2>Population : {population}</h2>
            <button onClick={updateValue}>Pressed me</button>
        </div>
    )
}

export default CountryFun
