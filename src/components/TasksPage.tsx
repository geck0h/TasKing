import { useState, type SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import { cn } from 'cn';

const cutString = (str: string): string => {
  const l = 15;
  if(str.length >= l)
    return str.slice(0, l) + '...';
  return str;
}

interface TaskDay {
  day: string;
  tasks: string[];
}

const TasksPage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [taskDays, setTaskDays] = useState<TaskDay[]>([
   { day: "Monday", tasks: [] },
   { day: "Tuesday", tasks: [] },
   { day: "Wednesday", tasks: [] },
   { day: "Thursday", tasks: [] },
   { day: "Friday", tasks: [] },
   { day: "Saturday", tasks: [] },
   { day: "Sunday", tasks: [] }
  ]);

  const handleAddTask = (e: React.SyntheticEvent<HTMLFormElement>, day: string) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const task = formData.get('addTask') as string;

    setTaskDays((prev) =>
      prev.map((taskDay) =>
        (taskDay.day === day)
          ? { ...taskDay, tasks: [...taskDay.tasks, task] }
          : taskDay
      )
    );

    e.currentTarget.reset();
  }

  const handleDeleteTask = (e: React.MouseEvent<HTMLButtonElement>, task: string) => {
    e.preventDefault();
    

  }

  return (
    <>
      <div className='flex flex-wrap justify-center items-center gap-lg h-screen'>
        {taskDays.map((item, idx) => (
          <div 
            className={cn(style.cards, (selectedCard === idx) ? 'fixed top-1/2 left-1/2 -translate-1/2 outline-1 outline-dashed scale-200 z-10 cursor-default' : 'hover:scale-105')}
            key={item.day} 
            onClick={() => setSelectedCard(idx)}
          >
            <h2 className='pb-lg text-2xl font-bold text-accent-foreground'>{item.day}</h2>
            <ul className='h-70 text-lg overflow-x-visible overflow-y-auto scrollbar-none'>
              {item.tasks.map((task) => (
                <li 
                  className='group/li relative flex justify-between items-center py-sm'
                  key={task}
                >
                  <span className={cn('text-wrap', (selectedCard !== null) && 'text-xs')}>{(selectedCard === null) ? cutString(task) : task}</span>
                  <img src='some/image.png' />
                  <button
                    className='absolute top-0 left-0
                     hidden group-hover/li:block h-10 w-10 bg-amber-200'
                    onClick={(e) => handleDeleteTask(e, task)}
                  >Delete</button>
                </li>
              ))}
            </ul>
            <form onSubmit={(e) => handleAddTask(e, item.day)}>
              <input
                className='absolute inset-x-2.5 bottom-2.5 p-md h-10 rounded-2xl bg-secondary text-secondary-foreground'  
                type='text'
                name='addTask'
              /> 
            </form>
          </div>))}{/*TODO: make the transition better*/}
      </div>
      <div 
        className={cn(style.backdropBlurElement, (selectedCard !== null) ? 'block' : '')}
        onClick={() => setSelectedCard(null)}
      />
    </>
  )
};

const style = {
  cards: 
    `relative
    p-5
    h-100 w-60 
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