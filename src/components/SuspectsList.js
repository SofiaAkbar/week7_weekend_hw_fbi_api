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
        <div className='suspects-list'>
                {suspectItems}
        </div>
        
    )
}

export default SuspectsList;