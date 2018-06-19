import React from 'react';
import classes from './BuilderControls.css'

import BuilderControl from './BuilderControl/BuilderControl';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
];

const buildControls = props=>{
return(
    
     <div className={classes.BuildControls}>
     <p>Price of the Burger <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl=>(
        <BuilderControl key={ctrl.label} label={ctrl.label} 
        addIngredients={()=>props.addIngredients(ctrl.type)} 
        removeIngredients={()=>props.removeIngredients(ctrl.type)}
        disabledInfo={props.disabledInfo[ctrl.type]} />
    ))}
    </div>
)}

export default buildControls;