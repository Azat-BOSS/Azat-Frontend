import React from "react";
import aboutStyle from "./about.module.css"
import photoImage from "../../../utils/images/photo.png"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion";

const About = () => {
  const elementsView = {
    hidden: {
      opacity: 0,
      y: 50
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
      <section className={aboutStyle.about}>
        <motion.div className={aboutStyle.about__container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: .4 ,once: true}}>
            <div id="about" className={aboutStyle.about__bg__image}></div>
            <div className={aboutStyle.about__block__text}>
              <motion.p custom={1} variants={elementsView}className={aboutStyle.about__text__upper}>About me</motion.p>
              <motion.h2 custom={2} variants={elementsView} className={aboutStyle.about__title}>Gaynutdinov Azat</motion.h2>
              <motion.p custom={3} variants={elementsView}className={aboutStyle.about__text}>have been doing front-end development for about 1 year.
              Use modern tools and improve my skills at the same time and algorithms. <br/><br/>
              Don't laugh at the picture, I wasn't in the mood for it)
              </motion.p>
          </div>
          <img src={photoImage} alt="photoImage" className={aboutStyle.about__image}/>
        </motion.div>
      </section>
    </AnimatePresence>
  );
}
 
export default About;