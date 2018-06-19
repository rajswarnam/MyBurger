import React from 'react';


import classes from './Model.css';

const modal= (props)=>{
   return <div className={classes.Modal}>
        {props.children}
        </div>

}

export default modal;