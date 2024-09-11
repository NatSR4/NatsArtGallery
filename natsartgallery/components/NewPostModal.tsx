//Create new post, button and modal

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function NewPostModal() {
  //show and hide modal
  const [postNew, setPostNew] = useState(false);

  return (
      <>
        <Fab color="secondary" aria-label="add" id='newPost' onClick={() => setPostNew(true)}>
          <AddIcon />
        </Fab>
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show = {postNew}
        onHide={() => setPostNew(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create a New Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control size="lg" type="text" placeholder='Title of Post' />
              <br></br>
            </Form.Group>
            <Form.Group>
              <Form.Control size="sm" type="text" placeholder='Description of Post' />
              <br></br>
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Add file</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

