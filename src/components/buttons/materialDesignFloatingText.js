import React from 'react';
import { Link } from 'react-router-dom';
import MaterialDesignCard from '../cards/materialDesignCard';


function MaterialDesignFloatingButtonText(props){
    

    return(
        <div className="bottom_left-corner ">
                <div className="inner_bottom">
                <Link to={props.to}>
                <button class="mdc-fab mdc-fab--extended">
                    <div class="mdc-fab__ripple"></div>
                    <span class="material-icons mdc-fab__icon">add</span>
                    <span class="mdc-fab__label">{props.text}</span>
                </button></Link>
                </div>
            </div>
    )
}

export default MaterialDesignFloatingButtonText;