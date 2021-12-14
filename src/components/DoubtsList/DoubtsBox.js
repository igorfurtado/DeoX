import React, { useState } from "react";
import doubtsItems from "./DoubtsItems";
import ListItems from "./List";
import './DoubtList.css'

function DoubtsBox() {

    const [items, setItems] = useState([doubtsItems]);

    //Função para mostrar a descrição de cada item:
    function onShowDesc(item) {
        let updateDesc = items[0].map(it => {
            if (it.id === item.id) {
                it.open = !it.open;
            }
            return it;
        });
        setItems([...items], updateDesc);
    };

    return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "10px" }}>
            <ListItems items={items} onShowDesc={onShowDesc} />
        </div>
    );

};

export default DoubtsBox;