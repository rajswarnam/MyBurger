import React from 'react';
import classes from './Burger.css'
import Burgeringredients from './Burgeringredients/Burgeringredients';

const burger = (props)=>{

  let transformedIngredients=Object.keys(props.ingredients).map(
      (igKey)=>{return [...Array(props.ingredients[igKey])].map(
          (_,i)=>{
              return <Burgeringredients key={igKey+i} type={igKey}/>
          }
      )}
  ).reduce((arr,el)=>arr.concat(el),[])
  if(transformedIngredients.length===0)
  transformedIngredients=<p> Please select ingredients</p>;
        return (
        <div className={classes.Burger}>
        <Burgeringredients type="bread-top"/>
            {transformedIngredients}
            <Burgeringredients type="bread-bottom"/>
        </div>
        );

}

export default burger;