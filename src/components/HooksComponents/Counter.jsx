import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({ firstName: "", lastName: "" });
  const handleClick = () => {
    setCounter((prevState) => prevState + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me {counter}</button>
      <input
        type="text"
        value={data.firstName}
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
      />
      <input
        type="text"
        value={data.lastName}
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
      />
      <h2>my name is {data.firstName}</h2>
      <h3>my lastName is {data.lastName}</h3>
    </div>
  );
};
export default Counter;
