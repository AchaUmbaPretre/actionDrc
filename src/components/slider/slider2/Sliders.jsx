import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {TrendingFlat } from '@mui/icons-material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './sliders.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper-container"
      >
        <SwiperSlide>
          <div className="slider-row1">
            <div className="slider-wrapper">
              <h1 className="sliders-h1">Ensemble c’est possible</h1>
              <p className="slider-desc">Bienvenue sur le portail de ACTIONS SARL, votre Agence en Douane et partenaire de confiance pour le placement de personnel . Nous sommes basés à Kinshasa et nous avons une présence bien établie dans tout le pays, notamment dans les zones minières à forte activité économique.</p>
              <div className="sliders-row">
                <a href="#apropos" className="slider-btn">Savoir plus <PlayCircleIcon className='icons-btn'/></a>
                <a href="#contact" className="slider-btn icon-white">Contactez nous <TrendingFlat className='icons-btn' /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-row2">
              <div className="slider-wrapper">
                <h1 className="sliders-h1">Ensemble c’est possible</h1>
                <p className="slider-desc">Bienvenue sur le portail de ACTIONS SARL, votre Agence en Douane et partenaire de confiance pour le placement de personnel . Nous sommes basés à Kinshasa et nous avons une présence bien établie dans tout le pays, notamment dans les zones minières à forte activité économique.</p>
                <div className="sliders-row">
                  <a href="#apropos" className="slider-btn">Savoir plus <PlayCircleIcon className='icons-btn'/></a>
                  <a href="#contact" className="slider-btn icon-white">Contactez nous <TrendingFlat className='icons-btn'/></a>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-row3">
            <div className="slider-wrapper">
                <h1 className="sliders-h1">Ensemble c’est possible</h1>
                <p className="slider-desc">Bienvenue sur le portail de ACTIONS SARL, votre Agence en Douane et partenaire de confiance pour le placement de personnel . Nous sommes basés à Kinshasa et nous avons une présence bien établie dans tout le pays, notamment dans les zones minières à forte activité économique.</p>
                <div className="sliders-row">
                  <a href="#apropos" className="slider-btn">Savoir plus <PlayCircleIcon className='icons-btn'/></a>
                  <a href="#contact" className="slider-btn icon-white">Contactez nous <TrendingFlat className='icons-btn'/></a>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-row4">
            <div className="slider-wrapper">
                <h1 className="sliders-h1">Ensemble c’est possible</h1>
                <p className="slider-desc">Bienvenue sur le portail de ACTIONS SARL, votre Agence en Douane et partenaire de confiance pour le placement de personnel . Nous sommes basés à Kinshasa et nous avons une présence bien établie dans tout le pays, notamment dans les zones minières à forte activité économique.</p>
                <div className="sliders-row">
                  <a href="#apropos" className="slider-btn">Savoir plus <PlayCircleIcon className='icons-btn'/></a>
                  <a href="#contact" className="slider-btn icon-white">Contactez nous <TrendingFlat className='icons-btn'/></a>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

