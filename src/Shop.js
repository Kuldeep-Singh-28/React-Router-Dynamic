import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Shop() {

    const [info, setItems] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const item = await fetch('https://fortnite-public-api.theapinetwork.com/upcoming/get');
        
        const data = await item.json();
        console.log(data);
        setItems(data.data)
    }
    return (
        <div className="shop">
            <h1>Shop page</h1>
            {info.map(items =>(
                <h3  key={items.itemId}>
                <Link to={`/shop/${items.itemId}`}>{items.item.name}</Link> 
                </h3>
            ))}
        </div>
    )
}

export default Shop
