import React from 'react';

import classes from './BuilderControl.css'


const builderControl = props=>(

     <div className={classes.BuildControl}>
         <p>Price of the Burger <strong>{props.price}</strong></p>
    <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.addIngredients}>More</button>
        <button className={classes.Less} onClick={props.removeIngredients} disabled={props.disabledInfo}>Less</button>
    </div>
)

export default builderControl;