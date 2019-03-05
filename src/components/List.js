import React from 'react';
import {ListItem} from './ListItem';
import "../styles/list.css";

export const List = (props) => {
    return (
        <div className="list">
            <span className="list__name">Name</span>
            <span className="list__number">Number</span>
            {props.subscribers.map((sub,i)=>{
            return <ListItem  i={i} handleDelete ={props.handleDelete} name={sub.name} number={sub.number} key={i}/>
            })}
        </div>
    )
}










