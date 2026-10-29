import { useState } from 'react';
import { cn } from 'cn';

const days: string[] = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const TasksPage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <>
      <div className='flex flex-wrap justify-center items-center gap-4 h-screen'>
        {days.map((item, idx) => (
          <div 
            className={cn(style.cards, (selectedCard === idx) ? 'fixed top-1/2 left-1/2 -translate-1/2 scale-200 z-10' : 'hover:scale-105')}
            key={item} 
            onClick={() => setSelectedCard((selectedCard === null) ? idx : null)}
          > ddlkadhjaoidajdnidajkd</div>))}{/*TODO: make the transition better*/}
      </div>
      <div className={cn(style.backdropBlurElement, (selectedCard !== null) ? 'block' : '')}/>
    </>
  )
};

const style = {
  cards: 
    `h-100 w-60 
    rounded-4xl 
    bg-card
    transition-[scale] ease-out duration-100
    cursor-pointer`,
  backdropBlurElement:
    `hidden 
    absolute top-0 left-0 
    w-screen h-screen 
    backdrop-blur-xs
    z-5`
};

export default TasksPage;