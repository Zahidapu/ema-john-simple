import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from "../../images/giphy.gif"

const Review = () => {
    const[cart,setCart]=useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false);
    const handlePlaceOrder=()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
       //console.log('Clicked')
       


    }
    const removeProduct=(productKey)=>{
        // console.log('Clicked',productKey);
        const newCart=cart.filter(pd=>pd.key!=productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
        
    }

    
    useEffect(()=>{
        // cart
        const saveCart=getDatabaseCart();
        const productsKey=Object.keys(saveCart);
        const cartProduct=productsKey.map(key=>{
        const product=fakeData.find(pd=>pd.key==key);
        product.quantity=saveCart[key];
        return product;
        });
        setCart(cartProduct);
        
    },[]);
    let thankYou;
    if(orderPlaced){
        thankYou= <img src={happyImage}></img>
    }
    return (
        <div className='twin-container'>
            <div className='product-container'>
                {
                    cart.map(pd=><ReviewItem
                        product={pd}
                        removeProduct={removeProduct}
                        key={pd.key}>
                        </ReviewItem>)
                }
                {
                    thankYou
                }
            
            </div>

            <div className='cart-container'>
            <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
            </Cart>
            </div>
            
            

        </div>
    );
};

export default Review;