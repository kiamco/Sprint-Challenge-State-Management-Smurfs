import React from 'react';
import SmurfCard from '../components/smurfCard';
import { Card } from 'semantic-ui-react'


const SmurfList = ({ smurfs }) => {
    console.log(smurfs);
    return (
        <div className='smurf-list'>
            <Card.Group centered>
                {smurfs.map(el => <SmurfCard key={el.id} smurf={el} />)}
            </Card.Group>
        </div>
    )
}

export default SmurfList;