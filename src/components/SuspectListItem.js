import React from 'react'


const SuspectListItem = ({suspect, onSuspectClick}) => {

    const handleClick = function(){
        onSuspectClick(suspect)
    }
    return (
        <li onClick={handleClick}>
            <p>{suspect.name}</p>
            <img src={suspect.image}></img>
        </li>
    )
}

export default SuspectListItem; 