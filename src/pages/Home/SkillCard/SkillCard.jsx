import React from "react";
import cardStyle from "./skillcard.module.css"

const SkillCard = ({name, text, image}) => {
  return ( 
    <div className={cardStyle.card}>
      <img src={`http://localhost:1337${image}`} alt={name} className={cardStyle.card__icon}/>
      <h4 className={cardStyle.card__title__name}>{name}</h4>
      <p className={cardStyle.card__text__info}>{text}</p>
    </div>
  );
}
 
export default SkillCard;