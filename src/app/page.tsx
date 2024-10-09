"use client"
import React, { use, useState } from 'react';
import NavBar from "../../components/NavBar";
import "./../../css/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import ImageCarousel from '../../components/ImageCarousel';
import './../../css/carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPostModal from '../../components/NewPostModal';
import Footer from '../../components/Footer';
export default function Home() {

  return (
    <main >
        <div >
          <div><NavBar/></div>
          <div id='carousel_container'>
          <div id='imagecarousel'>
          <ImageCarousel />
          </div>
          </div>
          <NewPostModal />
          </div>
   </main>
  );
}
