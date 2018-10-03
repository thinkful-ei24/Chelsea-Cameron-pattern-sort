import React from 'react';

export default function OrderTotal(props){
  let total=0;
  const patternObj = {...props.swatchOrder};
  Object.keys(props.swatchOrder).forEach(pattern => {
    total += patternObj[pattern].qty*patternObj[pattern].price;
  })
  return (
    <output>{`total: $${total}`}</output>
  );
};