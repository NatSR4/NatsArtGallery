import React from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ColorWheel from './ColorWheel';
import styled from "styled-components";
import './../css/navbar.css';


export default function NavBar() {
   return (
    <Navbar fixed='top' text-align='center' id='navbar'>
       Welcome to Nat's Art Gallery!       
    </Navbar>
   );
}