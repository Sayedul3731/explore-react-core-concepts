import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{ border: '2px solid lightgray', padding: '20px', margin: '20px', borderRadius: '10px' }}>
            <h2>Count: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}