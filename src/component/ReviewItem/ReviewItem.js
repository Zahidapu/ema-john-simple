import React from 'react';
import "./ReviewItem.css"

const reviewItem={
        border: '1px solid gray',
        borderRadius:'3px',
        textAlign: 'center',
        color: 'rgb(12, 11, 11)',
        marginLeft:'100px'
        
        
    
}

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product;
    return (
        <div style={reviewItem}>
            <h2>{name}</h2>
            <h5>Quantity: {quantity}</h5>
            <h5>Price:${price}</h5>
            <br/>
            <button
            onClick={()=>props.removeProduct(key)}
             className='main-button'>
             Remove</button>
        </div>
    );
};

export default ReviewItem;