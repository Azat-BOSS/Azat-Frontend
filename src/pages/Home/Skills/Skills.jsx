import React from "react";
import skillStyle from "./skills.module.css"
import SkillCard from "../SkillCard/SkillCard";
import { skillsFetchData } from "../../../services/Reducers/reducerServer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const Skills = () => {
  const dispatch = useDispatch()
  const skillCardData = useSelector(state => state.skillsCardSlice.skillsArr.data)

  useEffect(() => {
    dispatch(skillsFetchData())
  }, [dispatch])

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
          {skillCardData && skillCardData.map(el => (
            <SkillCard 
              name={el.attributes.titleTech} 
              text={el.attributes.infoTech}
              image={el.attributes.iconTech.data.attributes.url}
              key={el.id}
              />
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
 
export default Skills;