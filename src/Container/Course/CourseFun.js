import React, { useState } from 'react';
import FeesFunc from '../Fees/FeesFunc';

function CourseFun(props) {

    const [selectCourse, setSelectCourse] = useState('');

    function handleChange (event) {
        setSelectCourse(event.target.value);
    }

    return (
        <div>
            <select name="" id="Course" onChange={handleChange} value={selectCourse}>
                <option value="Select Course">Select Course</option>
                <option value="Web Design">Web Design</option>
                <option value="Full stack">Full stack</option>
                <option value="Android Developer">Android Developer</option>
                <option value="React">React</option>
            </select>

            <FeesFunc course = {selectCourse}/> 
        </div>
    );
}

export default CourseFun;   