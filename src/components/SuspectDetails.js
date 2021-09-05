import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const SuspectDetails = ({suspect}) => {
    
    console.log(suspect);
    return (

        <div>
            <h4>{suspect.title}</h4>
            <img src={suspect.image}></img>
            <p>{suspect.caption}</p>
            <p>{ReactHtmlParser(suspect.remarks)}</p>
            <p>{suspect.description}</p>
        </div>
        
    )
}

export default SuspectDetails;