import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';

const Clients = () => {
  return (
    <div className="p-5 text-center">
      <h1 className="mb-5">Successful Clients</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={client1} />
        </Card>
        <Card>
          <Card.Img variant="top" src={client2} />
        </Card>
      </CardGroup>
    </div>

  );
};

export default Clients;
