```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Sets count to 10 only after the initial render
    setTimeout(() => {
      setCount(10);
    }, 1000);
  }, []); //Empty dependency array ensures this only runs once after mount

  return (
    <div>Count: {count}</div>
  );
}

export default MyComponent;
```