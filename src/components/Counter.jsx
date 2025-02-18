
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from '@mui/material';

const Counter = () => {
    const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counterValue");
    return savedCount ? parseInt(savedCount, 10) : 0;
  })

    
  useEffect(() => {
    localStorage.setItem("counterValue", count);
  }, [count])

  const backgroundAnimation = useSpring({ backgroundColor: `rgba(59, 35, 136, ${count / 20})` });

  return (
    <div className="flex items-center justify-start h-screen p-10">
      <animated.div 
        style={backgroundAnimation} 
        className="bg-wheat p-6 rounded-2xl shadow-lg w-92 h-52 text-center border-2 border-black">
        <h2 className="text-orange-500 text-xl font-bold">Counter</h2>
        <p className="text-orange-500 text-2xl my-2">{count}</p>
        <div className="flex gap-2 text-xl">
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
          <Button onClick={() => setCount(count - 1)}>Decrement</Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
        </div>
      </animated.div>
    </div>
  )
}

export default Counter;

