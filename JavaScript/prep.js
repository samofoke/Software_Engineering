//Clousre

//prep writing a hook

const CounterComponent = () => {
  const [count, setCounter] = useState(0);

  const counterIcrement = () => {
    setCounter + 1;
  };

  return (
    <div>
      <button onClick={counterIcrement}>{count}</button>
    </div>
  );
};

export default CounterComponent;
