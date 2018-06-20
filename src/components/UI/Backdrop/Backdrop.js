import React from 'react';
import classes from './Backdrop.css';

const backDrop= (props)=>{
    return props.showModal? <div className={classes.Backdrop} onClick={props.hideModal}></div> : null ;
}

export default backDrop;