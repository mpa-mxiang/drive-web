import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

function ConfirmSuccess(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => {
        setOpen(true);
        props.submit_data();
      }}
      open={open}
      trigger={<Button>Schedule Meeting</Button>}
    >
      <Modal.Header>Meeting Scheduled</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Your meeting has been scheduled</Header>
          <p>
            Your meedting has been scheduled successfully. If you wish to
            reschedule the meeting go back and select another slot.
          </p>
          <p>Looking forward to meeting you.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Okay"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ConfirmSuccess;
