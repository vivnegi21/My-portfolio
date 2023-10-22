import React from 'react';
import "./achievements.css"
import Points from './Points';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Achievements() {
  return (
    <section className="achievements container" id="achievements">
      <h2 className="section__title">Achievements</h2>
      <Swiper className="achievements__container grid" 
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      >
          {Points.map(({id,image,title,subtitle,comment}) => {
            return(
              <SwiperSlide className="achievements__items" key={id}>
                <div className="thumb">
                  <img src = {image} alt='' className="achievements__logo"/>
                </div>
                <h3 className="achievements__title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="comment">{comment}</div>
              </SwiperSlide>  
            )
          })}
      </Swiper>
    </section>
  )
}
