import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    // if (count <= 1) return null;
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count <= 1) return null;
    setCount(count - 1);
  };

  return {
    count,
    increaseCount,
    decreaseCount,
  };
};

export default useCounter;
