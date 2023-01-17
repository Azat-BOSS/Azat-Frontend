import React from "react";
import footerStyle from "./footer.module.css"
import footerLogo from "../../utils/images/icons/logoFooter.svg"

const Footer = () => {
  return ( 
    <footer className={footerStyle.footer}>
     <img src={footerLogo} alt="" className={footerStyle.footer__logo}/>
      <div className={footerStyle.footer__block__info}>
        <ul className={footerStyle.footer__info}>
          <h4 className={footerStyle.footer__title}>Azat Gaynutdinov</h4>
          <p className={footerStyle.footer__geo}>Kazan | Ru</p>
        </ul>
        <ul className={footerStyle.footer__info}>
          <h4 className={footerStyle.footer__title}>Social Media</h4>
          <a href="https://github.com/Azat-BOSS" rel="noopener noreferrer" className={footerStyle.footer__text}>GitHub</a>
        </ul>
        <ul className={footerStyle.footer__info}>
          <h4 className={footerStyle.footer__title}>Messengers</h4>
          <a href="https://telegram.me/AzatFrontend" rel="noopener noreferrer" className={footerStyle.footer__text}>Telegram</a>
        </ul>
        <ul className={footerStyle.footer__info}>
          <h4 className={footerStyle.footer__title}>Email</h4>
          <a href="mailto:azatgainutdinov15@gmail.com" rel="noopener noreferrer" className={footerStyle.footer__text}>email</a>
        </ul>
      </div>
      <p className={footerStyle.footer__author}>© 2022, Azat Gaynutdinov</p>
    </footer>
  );
}
 
export default Footer;