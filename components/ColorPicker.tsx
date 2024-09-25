import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';



type colorp = {
  color:string;
  onColorChange: React.ChangeEventHandler;
}

function ColorPicker({color,onColorChange}:colorp) {
   
    const [pickColor, setPickColor] = useState("#f3aacb");
    function onTrigger(e:React.ChangeEvent<HTMLInputElement>) {
      setPickColor(e.target.value);
      color = pickColor;
    }
  
  return (
    <>
      <Form.Control
        type="color"
        defaultValue="#563d7c"
        title="Choose your color" 
        onChange = {onColorChange}
      />
    </>
  );
}


export default ColorPicker;