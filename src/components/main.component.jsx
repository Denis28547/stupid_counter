import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/counterReducer/counterReducer";

const Main = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(5);

  const incrementMany = () => {
    dispatch(incrementByAmount(incrementAmount));
    setIncrementAmount(0);
  };

  return (
    <>
      <span>{value}</span>
      <input
        value={incrementAmount}
        onChange={(event) => setIncrementAmount(Number(event.target.value))}
      />
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={incrementMany}>INCREMENT BY AMOUNT</button>
    </>
  );
};

export default Main;
