import React from 'react';
import SuspectListItem from './SuspectListItem'
import Suspect from '../Suspect'

const SuspectsList = ({suspects, onSuspectClick}) => {
    const suspectItems = suspects.map((suspect) => {

        return (
        <SuspectListItem 
          onSuspectClick={onSuspectClick} 
          suspect = {new Suspect(suspect)}
        />
        
        )
      })



    return (
        <ul>
            {suspectItems}
        </ul>
        
    )
}

export default SuspectsList;