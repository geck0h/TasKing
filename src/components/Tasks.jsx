import { useState } from 'react';
import x from './../assets/images/x.png';
import check from './../assets/images/check.png';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isTaskVisible, setIsTaskVisible] = useState(true);

  const handleSubmit = (event) => {
    if(event.key === 'Enter' && event.target.value != '') {
      const text = event.target.value;
      setTasks(prevTasks => [
        ...prevTasks,
        {
          id: crypto.randomUUID(),
          text: text,
          isCompleted: false
        }
      ]);
      event.target.value = ''; 
    }
  }

  const handleChangeStatus = (id) => {
    const newTasks = tasks.map(task => {
      if(task.id === id) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      
      return task;
    })
    setTasks(newTasks);
  }

  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => {
      return task.id !== id;
    })
    setTasks(newTasks);
  }
  
  const handleChangeTaskName = (event, id) => {
    const newTasks = tasks.map(task => {
      if(task.id === id) {
        return { 
          ...task,
          text: event.target.value
        }
      }

      return task;
    });
    setTasks(newTasks);
  }


  return(
    <>
      <div>
        {tasks.map(({ id, text, isCompleted }) => (
          <div 
            key={id} 
            className='task'
          >
            <button onClick={() => handleDelete(id)}>Delete</button>
            <textarea
              onChange={(event) => handleChangeTaskName(event, id)} 
              value={text}
              spellCheck={false}
              autoComplete='off'
              autoCorrect='off'
            />
            <img 
              className='status'
              onClick={() => handleChangeStatus(id)}
              src={(isCompleted) ? check : x}
            />
          </div>
        ))}
      </div>
      <input
        onKeyDown={handleSubmit} 
        type='text'
        className='task-input' 
      />
    </>
  );
}

export default Tasks;