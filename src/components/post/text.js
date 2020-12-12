import React, { useEffect, useState } from 'react';
import './post.css';
function Text(props) {
    return (
        <div className="text">
            {props.text}
        </div>
    );
}