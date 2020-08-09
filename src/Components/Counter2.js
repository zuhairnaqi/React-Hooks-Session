import React, { useEffect, useState } from 'react'

function Counter2() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter2;
