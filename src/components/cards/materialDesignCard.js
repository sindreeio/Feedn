import React from 'react';
import empty_user from '../../media/img/empty_user.png';
import MaterialDesignField from '../inputfields/MaterialDesignField';
import './cards.css'



function MaterialDesignCard(){

    return(
        <div className="margin mdc-card mdc-card--outlined" >
            <div class="mdc-card__primary-action" tabindex="0">
                <div class="my-card__media mdc-card__media mdc-card__media--16-9">
                    <div class="mdc-card__media-content">
                        <img className="limitImg" src={empty_user}>
                            </img>
                    </div>
                </div>
            </div>
                hei
        </div>
    )
}

export default MaterialDesignCard;