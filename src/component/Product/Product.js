import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props.product);
  const { name, img, seller, price, stock,key} = props.product;
  return (
    <div className="single-product">
      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <h4><Link to={"/product/"+key}>{name}</Link></h4>
        <p>by:{seller}</p>
        <br />
        <p>${price}</p>
        <p>only {stock + " "}left in stock - order soon</p>

        {
        props.showAddToCart &&<button
          className="main-button"
          onClick={() => {
            props.handleAddProduct(props.product);
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
        }

      </div>
    </div>
  );
};

export default Product;
