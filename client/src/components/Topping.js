import AppContext from "../AppContext";
import { useContext, useState } from "react";

export const Topping = ({ topping }) => {
  console.log(topping);
  let { name, amt, selected } = topping;
  const ctx = useContext(AppContext);
  const [isChecked, setChecked] = useState(false);
  const toppings = ctx.stateValue.selected.toppings;

  const handleChange = () => {
    if (!exists) {
      ctx.stateDispatch({
        type: "ADD_TOPPING",
        payload: { value: amt, name: name },
      });
    } else {
      ctx.stateDispatch({
        type: "REMOVE_TOPPING",
        payload: { value: amt, name: name },
      });
    }
  };
  let exists =
    toppings.filter((t) => {
      return t == name;
    }).length != 0
      ? true
      : false;
  console.log(toppings);

  return (
    <div className="grid grid-cols-4 border-b-[1px] border-solid border-gray-400">
      <div>
        <input type="checkbox" checked={exists} onChange={handleChange} />
      </div>
      <div>{name}</div>
      <div>{amt} </div>
    </div>
  );
};
