import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const SuspectDetails = ({suspect}) => {
    
    console.log(suspect);
    return (

        <div className="suspect-details">
            <h4>{suspect.title}</h4>
            <img src={suspect.image}></img>
            <p>{suspect.caption}</p>

            <h5>Aliases</h5>
            <p>{suspect.aliases ? suspect.aliases.join(", ") : "None"}</p>

            <h5> Reason</h5>
            <p>{suspect.description}</p>

            <h5> Description</h5>
            <p>Nationality: {suspect.nationality}</p>
            <p>Race: {suspect.race}</p>
            <p>Hair Colour: {suspect.hair}</p>
            <p>Eye Colour: {suspect.eyes}</p>
            <p>Complexion: {suspect.complexion}</p>


            <h5> Caution </h5>
            <p>{ReactHtmlParser(suspect.caution)}</p>

            <h5> Remarks </h5>
            <p>{ReactHtmlParser(suspect.remarks)}</p>

        </div>

    )
}

export default SuspectDetails;