import React, {useState, useEffect} from 'react';
import SuspectsList from '../components/SuspectsList';
import SuspectDetails from '../components/SuspectDetails';
import Suspect from '../Suspect'

const SuspectsContainer = () => {
    
    const [suspects, setSuspects] = useState([]);
    const [selectedSuspect, setSelectedSuspect] = useState(null);

    useEffect(() => {
        getSuspects();
    }, [])

    const getSuspects = function(){
        // https://api.fbi.gov/@wanted?pageSize=20&page=1
        fetch('http://localhost:3000/api_response.json') 
        .then(response => response.json())
        .then(suspects => setSuspects(suspects.items))
    }

   const onSuspectClick = function(suspect){
       setSelectedSuspect(suspect)
   };


    return (
        <div>
            <SuspectsList suspects={suspects} onSuspectClick={onSuspectClick}/>
            <br></br>
            <hr></hr>
            {selectedSuspect ? <SuspectDetails suspect={new Suspect(selectedSuspect)}/> : null}
        </div>
    )
}

export default SuspectsContainer;