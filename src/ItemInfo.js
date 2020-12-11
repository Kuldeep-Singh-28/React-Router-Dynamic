import React, { useEffect, useState } from 'react'
import './App.css';

function ItemInfo({match}) {

    const [itemInfo, setItem] = useState({
        images: {},
        description: ""
    });

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const item = await fetch(`https://fortnite-public-api.theapinetwork.com/item/get?id=${match.params.id}`);
        
        const data = await item.json();
        console.log(data);
        setItem(data.data.item)
    }

    return (
        <div className="item">
            <h1>{itemInfo.name}</h1>
            <img src={itemInfo.images.icon} alt=""/>
            <p>Description: <span>{itemInfo.description}</span> </p>
        </div>
    )
}

export default ItemInfo
