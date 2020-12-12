import React, { useEffect, useState } from 'react';
import './post.css';

function Text(props) {
    if (props.text) {
        return (
            <div className="text">
                {props.text}
            </div>
        );
    } else {
        return null;
    }
}

export default Text;