import React from 'react';
import AUX from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Model.css';

const modal= (props)=>{
   return <AUX>
       <Backdrop showModal={props.showModal} hideModal={props.hideModal}/>
       <div className={classes.Modal}
    style={{transform: props.showModal? 'Translatey(0)':'Translatey(-100vh)',
            opacity: props.showModal? '1':'0'}}>
        {props.children}
        </div>
        </AUX>

}

export default modal;