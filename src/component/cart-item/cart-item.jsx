import React from 'react'
import './cart-item.scss';

export default function cartItem({ item: {imageUrl, price, name, quantity} }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={'item'}  className="img"/>
            <div className="item-details">
                <span className="name">{name}</span> <br />
                <span >
                    {quantity} * {price}
                </span>
        
            </div>
        </div>
    )
}
