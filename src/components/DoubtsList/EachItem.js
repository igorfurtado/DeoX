import React from 'react'

export default function EachItem(props) {

    function showDescSelected(event) {
        let target = event.target;
        if (target.id === "selectedId") {
            props.onShowDesc(props.item)
        }
        console.log("clicado")
        console.log(props.item.open);
    };

    return (
        <div>
            <li>
                <div onClick={showDescSelected} id="selectedId" className="title-area">
                    {props.item.title}
                    <div onClick={showDescSelected} id="selectedId">
                        <img className="plusImg" alt="Plus icon - Deo X" src="./assets/plus.png" onClick={showDescSelected} id="selectedId"></img>
                    </div>
                </div>
                <div className={props.item.open ? "descriptionCard" : "descriptionCard fadeOut"}>
                    <p>{props.item.description}</p>
                </div>
            </li>

        </div>
    );
};
