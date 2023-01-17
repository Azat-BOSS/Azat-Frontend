import React, { useEffect } from "react";
import modalStyle from "./modal.module.css"
import ReactDOM from "react-dom";
import { changeModalState } from "../../services/modalReducer.js";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({children}) => {
  const stateModal = useSelector(state => state.modalSlice.modalState)
  const dispatch = useDispatch()
  useEffect(() => {
    stateModal === false 
    ? document.body.style.overflow = "auto"
    : document.body.style.overflow = "hidden"
  }, [stateModal])
   return ReactDOM.createPortal( 
    <div className={stateModal === false ? `${modalStyle.modal_disabled}` : `${modalStyle.modal}` }>
      <div onClick={() => dispatch(changeModalState(false))} className={stateModal === false ? modalStyle.modal__overlay_disabled : modalStyle.modal__overlay}></div>
        {children}
      </div>,
    document.getElementById("modal")
  )
}

export default Modal;