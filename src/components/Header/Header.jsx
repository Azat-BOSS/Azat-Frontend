import React from "react";
import headerStyle from "./header.module.css"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll";
import burgerIcon from "../../utils/images/icons/burgerMenu.svg"

const Header = () => {
  const pathSvg = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    }
  }

  return ( 
    <header className={headerStyle.header}>
      <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" className={headerStyle.header__logo}>
        <motion.rect initial="hidden" 
          animate="visible" 
          variants={pathSvg} 
          x="3" y="3" width="69" height="69" rx="17" stroke="white" strokeWidth="6"
          transition={{duration: 1.5}}/>
        <motion.path 
          initial="hidden" 
          animate="visible" 
          variants={pathSvg} 
          transition={{duration: 2.5}}
          d="M17.6471 70.1471V42.5735M17.6471 15V42.5735M17.6471 15L45.2206 42.5735M17.6471 15H45.2206M67.9412 65.2941L45.2206 42.5735M71.0294 15H45.2206M17.6471 42.5735H45.2206M45.2206 42.5735V15" 
          stroke="#FEFEFE" 
          strokeWidth="6"/>
      </svg>
      <nav className={headerStyle.header__nav}>
        <button type="button" className={headerStyle.header__nav__button}>
          <ScrollLink to="about" className={headerStyle.header__Link}>
            About
          </ScrollLink>
        </button>
        <button type="button" className={headerStyle.header__nav__button}>
          <ScrollLink to="skills" className={headerStyle.header__Link}>
            Skills
          </ScrollLink>
        </button>
        <button type="button" className={headerStyle.header__nav__button}>
          <ScrollLink to="projects" className={headerStyle.header__Link}>
            Projects
          </ScrollLink>
        </button>
        <button 
        type="button" 
        className={headerStyle.header__burger__button}>
          <img src={burgerIcon} alt="burgerButton" className={headerStyle.header__burger__icon}/>
      </button>
      </nav>
    </header>
  );
}
 
export default Header;