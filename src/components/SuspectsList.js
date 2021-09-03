import React from 'react';
import SuspectListItem from './SuspectListItem'

const SuspectsList = ({suspects}) => {
    const suspectItems = suspects.map((suspect) => {
        console.log(suspect);
        return <SuspectListItem name={suspect.title} key={suspect.uid} image={suspect.images[0].thumb} caption={suspect.images[0].caption} remarks={suspect.remarks} description={suspect.description}/>
      })



    return (
        <ul>
            {suspectItems}
        </ul>
        
    )
}

export default SuspectsList;