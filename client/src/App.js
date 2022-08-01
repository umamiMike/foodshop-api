import { Menu } from "./Menu";
import { base_state } from "./base_state";
import AppContext from "./AppContext";
import { reducer } from "./reducer";
import { useReducer } from "react";
import { Cart } from "./Cart";
import { Splash } from "./Splash";

const App = () => {
  const [state, dispatch] = useReducer(reducer, base_state);
  return (
    <AppContext.Provider value={{ stateValue: state, stateDispatch: dispatch }}>
      <div className="max-w-screen-xl mx-4 items-center justify-center flex-row space-y-8">
        <Splash props={state} />
        <Menu />
      </div>
      <Cart />
    </AppContext.Provider>
  );
};

export default App;
