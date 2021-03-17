import React from "react";


const Cart = (props) => {
  const cart = props.cart;
  // const total=cart.reduce((total,prod)=>total+prod.price,0);
  let itemPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const prod = cart[i];
    itemPrice =itemPrice+ prod.price*(prod.quantity) ;
    
  }

  let shipings =0;
  if(itemPrice>0){
      shipings =10;
  }
  else if(itemPrice>10){
      shipings =5;
  }
  else if(itemPrice>35){
      shipings=0;

  }
  let tax=(itemPrice/10).toFixed(2);
  let total=(itemPrice+shipings+Number(tax)).toFixed(2);
  
  
  return (
    <div>
      <h4 className='text-info'>Order Summary</h4>
      <h5>Items Ordered:{cart.length}</h5>
      <p>Items:${itemPrice.toFixed(2)}</p>
      <p>Shipping Cost:${shipings} </p>
      <p>Tax:${tax}</p>
      <p style={{color:'#B12704',fontSize:'20px',fontWeight:'700'}}>Order Total:${total}</p>
      {

        props.children
      }
      
    </div>
  );
};

export default Cart;
