import React from "react";
import skillStyle from "./skills.module.css"
import SkillCard from "../../../components/SkillCard/SkillCard";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { skillCardData } from "../../../utils/fakeApi";
const Skills = () => {
  const animationCard = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring"
      }
    })
  }

  return ( 
    <AnimatePresence>
      <div id="skills" className={skillStyle.skill}>
        <div className={skillStyle.skill__bg__image}></div>
        <motion.p  
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={animationCard}
            viewport={{once: true}}
            className={skillStyle.skill__upper__text}>Skills</motion.p>
        <motion.h2 
          className={skillStyle.skill__title}
          initial="hidden"
          whileInView="visible"
          custom={2}
          variants={animationCard}
          viewport={{once: true}}>My current skills</motion.h2>
        <motion.div className={skillStyle.skill__container__cards}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{amount: .1 , once: true}}
            variants={animationCard}
        >
          {skillCardData.map((el, index) => (
            <SkillCard 
            name={el.name} 
            text={el.text}
            image={el.image}
            key={index}
            />
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
 
export default Skills;