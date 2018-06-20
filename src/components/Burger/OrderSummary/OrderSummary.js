import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props)=>{

    const ingredientSummary=Object.keys(props.ingredients)
        .map((igKey)=>{return <li key={igKey}>{igKey} : {props.ingredients[igKey]}</li>});

 return <div>
     <p>You have ordered delicious burger with following ingredients</p>
     <p> Total Price : {props.price.toFixed(2)}</p>
     <ul>
     {ingredientSummary}
     </ul>
     <p> do you want to continue? </p>
     <Button btnType="Danger" clicked={props.hideModal}>Cancel</Button>
<Button btnType="Success" clicked={props.submitOrder}>Continue</Button>
 </div>
};

export default orderSummary;