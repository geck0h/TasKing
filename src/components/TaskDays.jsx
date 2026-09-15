import Tasks from './Tasks';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const TaskDays = () => {
  return (
    <>
      {weekDays.map((day) => (
        <div key={day} id={day.toLowerCase()} className='task-day'>
          <h3>{day}</h3>
          <Tasks />
        </div>
      ))}
    </>
  );
};

export default TaskDays;
