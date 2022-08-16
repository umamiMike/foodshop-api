import React, { useContext } from 'react';
import AppContext from '../AppContext';

export function Topping({ topping }) {
  const { name, amt } = topping;
  const ctx = useContext(AppContext);
  const { toppings } = ctx.stateValue.selected;

  const exists = toppings.filter((t) => t === name).length !== 0;
  const handleChange = () => {
    if (!exists) {
      ctx.stateDispatch({
        type: 'ADD_TOPPING',
        payload: { value: amt, name },
      });
    } else {
      ctx.stateDispatch({
        type: 'REMOVE_TOPPING',
        payload: { value: amt, name },
      });
    }
  };
  console.log(ctx.stateValue.selected);

  return (
    <div className="mx-4 topping-row grid grid-cols-3 border-b-[1px] border-solid border-gray-400">
      <div>
        <input type="checkbox" checked={exists} onChange={handleChange} />
      </div>
      <div>{name}</div>
      <div className="justify-self-end">
        $
        {amt}
      </div>
    </div>
  );
}