import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';
import classses from './Modal.css'
const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.clicked}></Backdrop>
        <div className={classses.modal}
        style={
            {
                transform: props.show ? 'translateY(0)' : 'scale(0)',
            }
        }>
            {props.children}
        </div>
    </Aux>
);

export default Modal;