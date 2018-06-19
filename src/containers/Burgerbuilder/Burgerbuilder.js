import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuilderControls/BuilderControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE={
    salad:0.4,
    meat:0.5,
    cheese:0.35,
    bacon:0.40
    };


class BurgerBuilder extends Component{


    state={
        ingredients:{
            cheese:0,
            salad:0,
            meat:0,
            bacon:0
        },
        totalPrice:4
    }

    addIngredients=(key)=>{
        const selectedIngredientCount = this.state.ingredients[key];
        let newIngredientsQuantity=selectedIngredientCount+1;
        const newIngredients ={...this.state.ingredients};
        newIngredients[key]=newIngredientsQuantity;
        let newPrice=this.state.totalPrice+INGREDIENTS_PRICE[key];
        this.setState({ingredients:newIngredients,totalPrice:newPrice});
    };

    removeIngredientsHandler=(key)=>{
        const selectedIngredientsCount = this.state.ingredients[key];
        if(selectedIngredientsCount===0)
        return;
        let newIngredientCount =  selectedIngredientsCount-1;
        const newIngredients ={...this.state.ingredients};
        newIngredients[key]=newIngredientCount;
        let newPrice=this.state.totalPrice-INGREDIENTS_PRICE[key];
        this.setState({ingredients:newIngredients,totalPrice:newPrice});
    };

    render(){
        const disabledInfo ={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<=0;
        }
        return (
        <Aux>
            <Modal><OrderSummary ingredients={this.state.ingredients}/></Modal>
            <Burger ingredients={this.state.ingredients}/>
            <div><BuildControls addIngredients={this.addIngredients} 
            removeIngredients={this.removeIngredientsHandler}
            disabledInfo={disabledInfo} 
            price={this.state.totalPrice}/></div>
        </Aux>
    );  
    }
}

export default BurgerBuilder;