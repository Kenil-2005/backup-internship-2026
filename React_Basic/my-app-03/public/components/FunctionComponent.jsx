import { useState } from 'react';

function Greeting(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount( count + 1);
    };

    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default Greeting;