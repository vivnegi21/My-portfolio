import React from 'react'
import "./home.css";
import Mypic from "../../assets/Profile.jpeg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src = {Mypic} alt = "pic" width="190" className="home__img" / >
        <h1 className="home__name">Vivek Negi</h1>
        <span className="home__designation">I am a Software Developer</span>
        
        <HeaderSocials/>
        <a href = "#contact" className="btn">Want to Connect ?</a>
        <ScrollDown/>
      
      </div>
      
      <Shapes/>
    </section>
  )
}
