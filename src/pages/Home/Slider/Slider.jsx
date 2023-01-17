import React, { useRef }from "react";
import sliderStyle from "./slider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import leftArr from "../../../utils/images/icons/leftIcon.svg"
import rightArr from "../../../utils/images/icons/rightIcon.svg"
import { Navigation } from "swiper";
import { motion } from "framer-motion";
import { worksData } from "../../../utils/fakeApi";
import "swiper/css";

const Slider = () => {
  const swiperRef = useRef()

  return ( 
    <div className={sliderStyle.slider}>
      <div className={sliderStyle.slider__bg__image}></div>
      <p id="projects"className={sliderStyle.slider__uppertitle__text}>works</p>
      <h2 className={sliderStyle.slider__title}>My Works</h2>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        onSwiper={(swiper) => swiperRef.current = swiper}
        className={sliderStyle.slider__container}>
          {worksData.map((el, index) => (
          <SwiperSlide key={index}>
          <SliderBlock
              title={el.title}
              text={el.text}
              gitLink={el.gitLink}
              webLink={el.weblink}
              image={el.image}
            />
          </SwiperSlide>
          ))}

      </Swiper>
      <motion.button className={sliderStyle.slider__button__prev} 
        type="button"
        onClick={() => swiperRef.current.slidePrev()} 
        whileHover={{scale: 1.2}} 
        whileTap={{scale: .9}}>
        <img src={rightArr} alt="prevButton" />
      </motion.button>
      <motion.button className={sliderStyle.slider__button__next}
        type="button"
        onClick={() => swiperRef.current.slideNext()} 
        whileHover={{scale: 1.2}} 
        whileTap={{scale: .9}}
        >
        <img src={leftArr} alt="nextButton"/>
      </motion.button>
    </div>
  );
}

const SliderBlock = ({title, text, gitLink, webLink, image}) => {
  return (
    <SwiperSlide>
      <div className={sliderStyle.sliderBlock}>
        <img src={image} alt="backgroundImage" className={sliderStyle.sliderBlock__image}/>
        <div className={sliderStyle.sliderBlock__text__block}>
          <h2 className={sliderStyle.sliderBlock__title__name}>{title}</h2>
          <p className={sliderStyle.sliderBlock__paragraph}>{text}</p>
          <nav className={sliderStyle.sliderBlock__nav}>
            <motion.a href={gitLink} target="_blank" whileHover={{scale: 1.05}} className={sliderStyle.sliderBlock__link}>View on Github</motion.a>
            <motion.a href={webLink} target="_blank" whileHover={{scale: 1.05}} className={sliderStyle.sliderBlock__link}>View Website</motion.a>
          </nav>
        </div>
      </div>
    </SwiperSlide>
  )
}
 
export default Slider;