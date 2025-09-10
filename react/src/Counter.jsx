function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div data-testid="count">{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count === 0}>–</button>
    </div>
  );
}
