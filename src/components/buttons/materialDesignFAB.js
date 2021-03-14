import React from 'react';
import { Link } from 'react-router-dom';
import '../cards/cards.css'


function MaterialDesignFAB(props) {
    return(
        
        <div className="inner_bottom">
        <Link className="remove_link_style" to={props.to}>
        <button class="mdc-fab" aria-label="Add">
            <div class="mdc-fab__ripple"></div>
            <span class="mdc-fab__icon material-icons">add</span>
        </button></Link>
        </div>
    );
}

export default MaterialDesignFAB;