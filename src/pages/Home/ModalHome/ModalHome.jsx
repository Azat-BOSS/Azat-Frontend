import React from "react";
import modalHome from "./modalhome.module.css"
import whatsAppIcon from "../../../utils/images/icons/whatsapp.svg"
import telegramIcon from "../../../utils/images/icons/telegram.svg"
import mailIcon from "../../../utils/images/icons/mail.svg"

const ModalHome = () => {
  return (  
    <div 
    className={modalHome.modalHome}>
      <h3 className={modalHome.modalHome__title}>Get In Touch</h3>
      <p className={modalHome.modalHome__text}>Although I'm not currently looking for any new opportunities, 
      my mail is always open. If you have a question or you need create web. app you can write me in messangers or send email.</p>
      <ul className={modalHome.modalHome__icons}>
        <li className={modalHome.modalHome__li}>
          <a href="https://telegram.me/AzatFrontend" className={modalHome.modalHome__link}>
            <img src={telegramIcon} alt="telegram" target="_blank" rel="noopener noreferrer" className={modalHome.modalHome__telegram}/>
          </a>
        </li>
        <li className={modalHome.modalHome__li}>
          <a href="https://telegram.me/AzatFrontend" className={modalHome.modalHome__link}>
            <img src={whatsAppIcon} alt="whatsApp" target="_blank" rel="noopener noreferrer" className={modalHome.modalHome__image}/>
          </a>
        </li>
        <li className={modalHome.modalHome__li}>
          <a href="https://telegram.me/AzatFrontend" className={modalHome.modalHome__link}>
            <img src={mailIcon} alt="mailIcon" target="_blank" rel="noopener noreferrer" className={modalHome.modalHome__image}/>
          </a>
        </li>
      </ul>
    </div>
  );
}
 
export default ModalHome;