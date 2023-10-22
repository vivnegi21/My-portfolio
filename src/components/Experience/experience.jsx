 import React from 'react'
import "./experience.css"
import starttech from "../../assets/start-tech-icon.png";
import byte from "../../assets/accenture-logo.png";
import opensource from "../../assets/gsoc.jpg";

export default function Experience() {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      
      <div className="experience__container grid">

        <div className="experience__item">
          <img src={byte} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">ASE Intern</h3>
          <h4 className="subtitle">Accenture</h4>
          <ul>
            <li className="experience__description">• Collaborated in cross-functional groups and deepening my problem solving skills.</li>
            <li className="experience__description">• Worked on developing timesheet portal on Power Apps for the client. Worked on admin panel in the portal in a team of 4</li>
            <li className="experience__description">• implemented search functionality in admin panel to search for employees</li>
          </ul>
        </div>

        {/* <div className="experience__item">
          <img src={opensource} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">Student Software Developer</h3>
          <h4 className="subtitle">Google Summer of Code</h4>
          <ul>
            <li className="experience__description">• Contributing to the pgRouting (A project that falls under the umbrella of OSGeo (Open Source Geospatial Foundation)).</li>
            <li className="experience__description">• pgRouting is an open-source extension for the PostgreSQL database that provides geospatial routing functionality.</li>
            <li className="experience__description">• It allows for the calculation of shortest paths and other routing-related operations within a spatial database environment.</li>
          </ul>
        </div> */}
        <div className='experience__item' id='id_center'></div>

        <div className="experience__item">
          <img src={starttech} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">Machine Learning Intern</h3>
          <h4 className="subtitle">Start-Tech Academy</h4>
          <ul>
            <li className="experience__description">• Designed and developed a trained model to predict salary based on working experience and other parameters.</li>
            <li className="experience__description">• Used regression model to train on large data and get maximum validation accuracy.</li>
            <li className="experience__description">• Used ML libraries like Scikit-Learn, pandas, Matplotlib and numpy.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
