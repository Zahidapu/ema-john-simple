import React, { useEffect } from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const first10 = fakeData.slice(0, 30);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
      const saveCart=getDatabaseCart();
    //   console.log(saveCart);
    const productKeys = Object.keys(saveCart);
    // console.log(productKeys);
     const previewsCart=productKeys.map(exitingKey=>{
         const product=fakeData.find(pd=>pd.key===exitingKey);
         product.quantity=saveCart[exitingKey];
         return product;
        
        })
        setCart(previewsCart);

  },[])

  const handleAddProduct = (product) => {
    //  console.log('added product',product);
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="twin-container">
      <div className="product-container">
        {products.map((productItem) => (
          <Product
            handleAddProduct={handleAddProduct}
            key={productItem.key}
            showAddToCart={true}
            product={productItem}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
        <Link to="/review">
        <button className="main-button">Review Your Order</button>
        
        </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
