import React from 'react';

import OrderItems from './orderItems';
import OrderTotal from './orderTotal';

export default function Order(props){
  return(
    <div className='order-wrapper'>
      <h2>Order Pattern Swatches</h2>
      <OrderItems quantityUpdate={props.quantityUpdate}/>
      <OrderTotal swatchOrder={props.swatchOrder}/>
    </div>

  );
};