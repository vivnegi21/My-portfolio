import React, { useState } from 'react'
import "./projects.css"
import Menu from "./Menu";

export default function Projects() {
  const [items,setItems] = useState(Menu);
  
  function changeitem(event){
    
    const updatedItems = Menu.filter((curElem)=>{
      return curElem.category === event.target.getAttribute('val');
    })
    setItems(updatedItems);

    if(event.target.getAttribute('val') === "all") setItems(Menu);
  }

  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Recent Works</h2>
      <div className="project__filters">
        <span className="project__item" onClick={changeitem} val="all">All</span>
        <span className="project__item" onClick={changeitem} val="Full Stack">FullStack</span>
        <span className="project__item" onClick={changeitem} val="Frontend">Frontend</span>
        <span className="project__item" onClick={changeitem} val="Backend">Backend</span>
        <span className="project__item" onClick={changeitem} val="Others">Others</span>
      </div>

      <div className="project__container grid">
        {items.map((element) => {
          const{id,url,image,title,category} = element;
          return(
            <div className="project__card" key = {id}>
              <div className="project__thumbnail">
                <img src={image} alt=""  className="project__img" />
                <div className="project__mask"></div>
              </div>

              <span className="project__category">{category}</span>
              <h3 className="project__title">{title}</h3>
              <a href = {url} className="project__button" target='_blank'>
                <i className="icon-link project__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>

    </section>
  )
}
