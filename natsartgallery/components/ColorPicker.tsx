import Form from 'react-bootstrap/Form';

function ColorPicker() {
  return (
    <>
      <Form.Control
        type="color"
        defaultValue="#563d7c"
        title="Choose your color"        
      />
    </>
  );
}

export default ColorPicker;