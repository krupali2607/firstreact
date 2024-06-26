import React from 'react';

function FeesFunc(props) {
    let fees = '';
    switch (props.course) {
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
        <div>
            <h4>{props.course} : {fees}</h4>
        </div>
    );
}

export default FeesFunc;