import React from 'react'

const SuspectListItem = (suspect) => {
    return (
        <li>
            <div>
                <h4>{suspect.name}</h4>
                
                <img src={suspect.image}></img>
                <p>{suspect.caption}</p>
                {suspect.remarks}
                <p>{suspect.description}</p>
            </div>
        </li>
    )
}

export default SuspectListItem; 