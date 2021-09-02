import React from 'react';
import SuspectsList from '../components/SuspectsList';
import SuspectDetails from '../components/SuspectDetails';

const SuspectsContainer = () => {
    return (
        <div>
            <SuspectsList/>
            <SuspectDetails/>
        </div>
    )
}

export default SuspectsContainer;