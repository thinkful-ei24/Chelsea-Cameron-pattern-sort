import React from 'react';
import './order.css';

import OrderItems from './orderItems';
import OrderTotal from './orderTotal';

export default function Order(props) {
  return (
    <div className="order-wrapper">
      <h2>Order Pattern Swatches</h2>
      <OrderItems value={props.value} quantityUpdate={props.quantityUpdate} />
      <OrderTotal swatchOrder={props.swatchOrder} />
    </div>
  );
}
