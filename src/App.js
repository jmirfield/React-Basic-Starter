import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => { setCount(count => count + 1) }}>Click Me: {count}</button>
        </div>
    )
}

export default App