import { useState, useMemo } from 'react'

// This component demonstrates React compiler optimizations
// The compiler should automatically optimize this component for re-renders
function OptimizedComponent() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(2)

  // This expensive calculation would benefit from React compiler optimizations
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...')
    return count * multiplier * Math.random()
  }, [count, multiplier])

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>React Compiler Demo Component</h3>
      <p>Count: {count}</p>
      <p>Multiplier: {multiplier}</p>
      <p>Expensive Value: {expensiveValue.toFixed(2)}</p>
      
      <div>
        <button onClick={() => setCount(c => c + 1)}>
          Increment Count
        </button>
        <button onClick={() => setMultiplier(m => m + 1)} style={{ marginLeft: '10px' }}>
          Increment Multiplier
        </button>
      </div>
    </div>
  )
}

export default OptimizedComponent