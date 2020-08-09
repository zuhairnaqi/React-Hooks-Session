import React, { useEffect, useState } from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle';

function Counter() {
    const [count, setCount] = useState(0);
    useDocumentTitle(count);
    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;
