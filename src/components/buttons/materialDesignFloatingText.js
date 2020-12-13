import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/cards.css'


function MaterialDesignFloatingButtonText(props){
    

    return(
        
                <div className="inner_bottom">
                <Link className="remove_link_style" to={props.to}>
                <button class="mdc-fab mdc-fab--extended">
                    <div class="mdc-fab__ripple"></div>
                    <span class="material-icons mdc-fab__icon">add</span>
                    <span class="mdc-fab__label">{props.text}</span>
                </button></Link>
                </div>
    )
}

export default MaterialDesignFloatingButtonText;