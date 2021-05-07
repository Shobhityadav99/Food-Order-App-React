import { Fragment } from "react";
import classes from "./Modal.module.css";

const BackDrop = props => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = props => {
    return <div className={classes.modal} >
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props =>{
    return <Fragment>
        <BackDrop />
        <ModalOverlay />
    </Fragment>
}

export default Modal;