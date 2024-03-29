
'use client';
import React, { useState, Fragment } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

export default function ColorWheel() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  return (
    <Fragment>
      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
      <div style={{ width: '50%', height: '50%', marginTop: 20, background: hsvaToHex(hsva) }}>hello</div>
    </Fragment>
  );
}

//export default ColorWheel;