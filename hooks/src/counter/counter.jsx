const { useState } = require("react");

const Counter = () => {
  const [number, setNumber] = useState(0);
  const sumar = () => {
    setNumber(number + 1);
  };

  const restar = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      <h2>{number}</h2>
      <button onClick={sumar}>+</button>
      <hr></hr>
    </div>
  );
};

export default Counter;
