import { useState } from 'react';
import { cn } from 'cn';

const days: string[] = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const TasksPage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className='flex flex-wrap justify-center items-center gap-4 h-screen'>
      {days.map((item, idx) => (
        <div 
          className={cn(style.cards, (selectedCard === idx) ? 'absolute top-1/2 left-1/2 -translate-1/2 scale-200' : '')}
          key={item} 
          onClick={() => setSelectedCard(idx)}
          ></div>))}
    </div>
  )
};

const style = {
  cards: 
    `h-100 w-60 
    rounded-4xl 
    bg-card
    transition-[scale]  ease-out duration-100 hover:scale-105
    cursor-pointer`
};

export default TasksPage;