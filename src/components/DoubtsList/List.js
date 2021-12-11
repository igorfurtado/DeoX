import React from 'react';
import EachItem from "./EachItem";

function ListItems(props) {

    return (<ul>
        {props.items[0].map(item => <EachItem key={item.id} item={item} onShowDesc={props.onShowDesc}></EachItem>)}
    </ul>);
};

export default ListItems;