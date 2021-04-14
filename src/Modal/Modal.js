
import React, { useState } from 'react';
import './Modal.css'


const Modal = (props) => {
    console.log("modal",props)
  
 
  return (

   <div className={`modal__wrapper`} style={{...props.style}}>
       <div className='modal__body'>
           <div className='modal__close' onClick={()=>props.setModal(false)}>x</div>
           <h2>{props.title}</h2>
           <hr />
           {props.children}

       </div>
    </div>
    
  );
};


export default Modal;