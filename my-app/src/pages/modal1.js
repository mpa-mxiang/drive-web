import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

function InformLogged(props) {
  return (
    <Modal
      onClose={() => console.log('close')}
      open={props.info_selected_active}
    >
      <Modal.Header>Selection saved</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Your selection was saved</Header>
          <p>
            To submit your meeting request fill in your first and family name
            and submit using the button above.
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Okay"
          labelPosition="right"
          icon="checkmark"
          onClick={() => props.set_info_selected_active(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default InformLogged;
