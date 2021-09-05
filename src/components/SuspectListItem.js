import React from 'react'


const SuspectListItem = ({suspect, onSuspectClick}) => {

    const handleClick = function(){
        onSuspectClick(suspect)
    }
    return (
        <div className="suspect-list-item">
            <div onClick={handleClick}>
                <p>{suspect.name}</p>
                <img src={suspect.image}></img>
            </div>
        </div>
    )
}

export default SuspectListItem; 