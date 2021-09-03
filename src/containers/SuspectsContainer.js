import React, {useState, useEffect} from 'react';
import SuspectsList from '../components/SuspectsList';
import SuspectDetails from '../components/SuspectDetails';

const SuspectsContainer = () => {
    
    const [suspects, setSuspects] = useState([]);

    useEffect(() => {
        getSuspects();
    }, [])

    const getSuspects = function(){
        // https://api.fbi.gov/@wanted?pageSize=20&page=1
        fetch('http://localhost:3000/api_response.json') 
        .then(response => response.json())
        .then(suspects => setSuspects(suspects.items))
    }

    // console.log(suspects[0])


    return (
        <div>
            <SuspectsList suspects={suspects}/>
            <SuspectDetails/>
        </div>
    )
}

export default SuspectsContainer;