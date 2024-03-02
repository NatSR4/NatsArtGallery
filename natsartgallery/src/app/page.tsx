"use client"
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import ColorWheel from "../../components/ColorWheel";
import NavBar from "../../components/NavBar";
import "./../../css/main.css";
import SideBar from '../../components/SideBar';
import Login from '../../components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import { ImageCards } from '../../components/ImageCards';


export default function Home() {
  return (
    
    <main id='body'>
        <div>
          <SideBar/>
          body
          
          <Login />
          </div>
   </main>
  )
}
