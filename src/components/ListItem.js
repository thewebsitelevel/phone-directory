import React from 'react';
import "../styles/list.css";

export const ListItem = (props) => {
    return (
        <div className="list__indv">
            <span className="list__name">{props.name}</span>
            <span className="list__number">{props.number}</span>
            <button className="list__delete" id={props.i} onClick={props.handleDelete}>Delete</button>
        </div>
    )
}