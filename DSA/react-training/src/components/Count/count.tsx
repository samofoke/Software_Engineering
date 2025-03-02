import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev: number) => prev + 1);
  const decremtnt = () => setCount((prev: number) => prev - 1);

  return (
    <div>
      <h1>The Counter: {count}</h1>
      <h2>This is the sample count challenge </h2>
      <p>This where we going to start the challenge</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decremtnt}>Decrement</button>
    </div>
  );
};

export default Count;
