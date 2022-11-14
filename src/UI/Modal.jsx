import React, {Fragment} from 'react'
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div onClick={props.onClose} className='fixed top-0 left-0 w-full h-full z-20 bg-[#404040] bg-opacity-30'/>
}

const ModalOverlay = (props) => {
    return(
        <div className='fixed top-[30vh] left-[400px] w-[500px] h-[280px] bg-[#ffffff] p-4 rounded-2xl shadow-md z-30'>
             <div className=''>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
         {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
         {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
