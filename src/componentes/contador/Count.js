import React from 'react';
import { Container, Segment, Card, Image, Button } from 'semantic-ui-react';

const Count = () => {
  return (
    <div style={{
     
      }}
      >
        <Container> 
          <Segment>
          <Card>
      <Card.Content>
        <Image floated='center'
          size='mini' width='300px'height='300px'src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />

        <Card.Header>Tomas gomez</Card.Header>
        <Card.Meta>Chofer ASIGNADO </Card.Meta>
        <Card.Description>
          CATEGORIA BMX <strong>THE BEST DRIVER</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button  color='green'>
            -
          </Button>
          -
          <Button color='red'>
            +
          </Button>
        </div>
      </Card.Content>
    </Card>

          </Segment>

        </Container>

  </div>
  );     
  
};

export default Count;