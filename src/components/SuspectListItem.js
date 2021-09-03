import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const SuspectListItem = (suspect) => {
    return (
        <li>
            <div>
                <h4>{suspect.name}</h4>
                
                <img src={suspect.image}></img>
                <p>{suspect.caption}</p>
                {ReactHtmlParser(suspect.remarks)}
                <p>{suspect.description}</p>
            </div>
        </li>
    )
}

export default SuspectListItem; 