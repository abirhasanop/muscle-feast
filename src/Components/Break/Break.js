import React from 'react';
import './Break.css'

const Break = (props) => {
    const {time, handleAddList} = props
    return (
        <div>
            <button onClick={() => handleAddList(time)}>{time}</button>
        </div>
    );
};

export default Break;