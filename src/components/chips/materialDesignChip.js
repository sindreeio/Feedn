import React from 'react';

function MaterialDesignChip(props) {
    return(
        <div class={"mdc-chip" + (props.selected ? " mdc-chip--selected" : "")}>
            <div class="mdc-chip__ripple"></div>
            <div class="mdc-chip__touch" onClick={() => props.action(props.id)}></div>
            <span class="mdc-chip__text">{props.name}</span>
        </div>
    );
}

export default MaterialDesignChip;