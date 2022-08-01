import AppContext from "../AppContext";
import { useContext, useState } from "react";

export const Topping = ({ topping }) => {
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
  console.log(ctx.stateValue.selected);

  return (
    <div className="h-10 place-items-center  topping-row grid gap-4 grid-cols-4 border-b-[1px] border-solid border-gray-400">
      <div>
        <input type="checkbox" checked={exists} onChange={handleChange} />
      </div>
      <div>{name}</div>
      <div>{amt} </div>
    </div>
  );
};