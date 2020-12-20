import { useEffect, useState } from 'react';
import MaterialDesignChip from '../chips/materialDesignChip';
import {Redirect, useParams} from 'react-router-dom';
import './feedChips.css';

function FeedChips(props) {

    const useChip = (feedId) => {
        const index = props.chips.findIndex((chip) => chip.id === feedId);
        let newChips = [...props.chips];
        newChips[index].selected = !newChips[index].selected;
        props.setChips(newChips);
    }

    const materialChips = props.chips.map((feed) => (
        <MaterialDesignChip key={feed.id} id={feed.id} selected={feed.selected} name={feed.name} action={useChip} />
        ) 
    );

    return(
        <div className="chips">
            <div class="mdc-chip-set mdc-chip-set--choice" >
                {materialChips}
            </div>
        </div>
    );
}

export default FeedChips;