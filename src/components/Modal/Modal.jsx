import React from "react";
import { useDispatch, useSelector } from "react-redux"
import modalStyle from "./modal.module.css"
import ReactDOM from "react-dom";
import { changeState } from "../../services/Reducers/reducerModalHome";
import { useEffect } from "react";

const Modal = ({children}) => {
  const dispatch = useDispatch()
  const stateModal = useSelector(state => state.modalHomeSlice.inState)

  useEffect(() => {
    stateModal === false 
    ? document.body.style.overflow = "auto"
    : document.body.style.overflow = "hidden"
  }, [stateModal])
   return ReactDOM.createPortal( 
    <div className={stateModal === false ? `${modalStyle.modal_disabled} body_disabled` : `${modalStyle.modal} body_active`}>
      <div onClick={() => dispatch(changeState(false))} className={stateModal === false ? modalStyle.modal__overlay_disabled : modalStyle.modal__overlay}></div>
        {children}
      </div>,
    document.getElementById("modal")
  )
}

export default Modal;