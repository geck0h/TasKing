import { useState } from 'react';
import { Progress } from './shadcn/components/ui/progress';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bold text-2xl font-sans select-none' onClick={() => setCount(count+1)}>Hello bro, click me to increase the counter</h1>
      <p>Counter: {count}</p>
      <Progress value={count} className='w-50'/>
    </>
  )
}

export default App;
