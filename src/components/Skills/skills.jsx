import React from 'react'
import "./skills.css"
import framework from "../../assets/react_logo3.png";
import other from "../../assets/others_logo.png";
import language from "../../assets/language_logo.png";
import database from "../../assets/database_logo3.png";

export default function skills() {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container grid">
      
            <div className="skills__card">
              <img src = {framework} alt = "" width="140" className="skills__img"/> 
              <h3 className="skills__title">Frameworks/Libraries</h3>
              <ul type="disc">
                <li className="skills__description">• React js</li>
                <li className="skills__description">• Next js</li>
                <li className="skills__description">• Node js</li>
                <li className="skills__description">• Express js</li>
              </ul>
            </div>

            <div className="skills__card">
              <img src = {language} alt = "" width="140" className="skills__img"/> 
              <h3 className="skills__title">Languages</h3>
              <ul type="disc">
                <li className="skills__description">• C++ </li>
                <li className="skills__description">• Python</li>
                <li className="skills__description">• Javascript</li>
                <li className="skills__description">• HTML/CSS</li>
              </ul>
            </div>

            <div className="skills__card">
              <img src = {database} alt = "" width="140" className="skills__img"/> 
              <h3 className="skills__title">Database</h3>
              <ul type="disc">
                <li className="skills__description">• MySQL </li>
                {/* <li className="skills__description">• PostgreSQL </li> */}
                <li className="skills__description">• MongoDB</li>
              </ul>
            </div>

            <div className="skills__card">
              <img src = {other} alt = "" width="140" className="skills__img"/> 
              <h3 className="skills__title">Others</h3>
              <ul type="disc">
                <li className="skills__description">• Rest API's</li>
                <li className="skills__description">• Deep Learning </li>
                <li className="skills__description">• Data Structures</li>
                <li className="skills__description">• Github</li>
              </ul>
            </div>
      </div>
      {/* <div className="skills__container grid">
        {data.map(({id,image,title,description})=>{
          return (
            <div className="skills__card" key={id}>
              <img src = {image} alt = "" className="skills__img"/> 
              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>

            </div>
          );
        })}
      </div> */}
    </section>
  )
}
