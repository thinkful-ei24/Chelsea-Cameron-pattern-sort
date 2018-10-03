import React from 'react';

export default function OrderItems(props) {
  const style = [
    {
      name: 'gingham',
      price: 10
    },
    {
      name: 'stripes',
      price: 5
    },
    {
      name: 'checked',
      price: 2
    }
  ];
  const itemOptions = style.map(pattern => {
    return (
      <fieldset>
        <label forHtml={pattern.name}>{`${pattern.name} set:`}</label>
        <span>{`$${pattern.price}`}</span>
        <input
          id={pattern.name}
          type="number"
          min={0}
          max={5}
          value={props.value[pattern.name].qty}
          onChange={e => props.quantityUpdate(e.target.id, e.target.value)}
        />
      </fieldset>
    );
  });
  return <form>{itemOptions}</form>;
}
