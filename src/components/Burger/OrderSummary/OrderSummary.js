import React from 'react';

const orderSummary = (props)=>{

    const ingredientSummary=Object.keys(props.ingredients)
        .map((igKey)=>{return <li>{igKey} : {props.ingredients[igKey]}</li>});

 return <div>
     <p>You have ordered delicious burger with following ingredients</p>
     <ul>
     {ingredientSummary}
     </ul>
 </div>
};

export default orderSummary;