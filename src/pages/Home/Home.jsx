import React from "react";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Slider from "./Slider/Slider";
import Modal from "../../components/Modal/Modal";
import ModalHome from "./ModalHome/ModalHome";

const Home = () => {
  return ( 
    <>
      <Intro/>
      <About />
      <Skills/>
      <Slider/>
      <Modal>
        <ModalHome/>
      </Modal>
    </>
  );
}
 
export default Home;