"use client"
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import ColorWheel from "../../components/ColorWheel";
import NavBar from "../../components/NavBar";
import "./../../css/main.css";
import SideBar from '../../components/SideBar';
import { ImageCards } from '../../components/ImageCards';


export default function Home() {
  return (
    <main id='body'>
        <NavBar /> 
        <div>
          <SideBar/>
          body
          <ImageCards></ImageCards>
          </div>
   </main>
  )
}
