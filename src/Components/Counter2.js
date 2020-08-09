import React, { useEffect, useState } from 'react'
// import useCounter from '../Hooks/useCounter';

function Counter2() {
    // const [count, increment, decrement] = useCounter();
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <div>
            <p>Counter II = {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter2;
