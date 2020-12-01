import React from 'react';
import Navbar from '../../components/navbar/navbar.js';
import './feedsOverview.css';
import MaterialDesignCard from '../../components/cards/materialDesignCard.js'
import MaterialDesignField from '../../components/inputfields/MaterialDesignField.js';



function FeedOverview(){
    

    return(
        <div>
            <Navbar/>
            <div className="center">
                <div className="feeds_container">
                    <div className="header">Dine feeder</div>
                    <div className="center">
                        <div className="grid">
                            <div className="card_div">
                                <MaterialDesignCard/>
                            </div>
                            <div className="card_div">
                                <MaterialDesignCard/>
                            </div>
                            <div className="card_div">
                                <MaterialDesignCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedOverview;