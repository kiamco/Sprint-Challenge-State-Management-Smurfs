import React from 'react';
import {Card} from 'semantic-ui-react';
const SmurfCard = ({smurf}) => {
    return (
          <Card>
      <Card.Content>
        <Card.Header content= {`Name: ${smurf.name}`} />
                <Card.Meta content={`Age: ${smurf.age}`}/>
                <Card.Description content={`Height: ${smurf.height}`}/>
      </Card.Content>
    </Card>
    )
}

export default SmurfCard;