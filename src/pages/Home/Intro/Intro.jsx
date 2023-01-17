import React from "react";
import introStyle from "./intro.module.css"
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { changeModalState } from "../../../Services/modalReducer";
import { useDispatch } from "react-redux";

const Intro = () => {
  const dispatch = useDispatch()
  const elementsView = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * .2,
        type: "spring",
      }
    })
  }
  return ( 
    <AnimatePresence>
      <motion.div className={introStyle.intro}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}>
        <div className={introStyle.intro__bg_image}></div>
        <div className={introStyle.intro__text__container}>
          <motion.h1 custom={1} variants={elementsView} className={introStyle.intro__title}>Frontend developer</motion.h1>
          <motion.p custom={2} variants={elementsView} className={introStyle.intro__text}>Creating modern frontend system and design</motion.p>
          <motion.button onClick={() => dispatch(changeModalState(true))} custom={3} whileHover={{scale: 1.05}} variants={elementsView} className={introStyle.intro__button}>Contact me</motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
 
export default Intro;