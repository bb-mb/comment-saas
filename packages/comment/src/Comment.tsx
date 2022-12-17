import React, { useState } from 'react';

export const Comment = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increase}>increase</button>
    </div>
  );
};
