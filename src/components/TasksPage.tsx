const TasksPage = () => {
  return (
    <div className='flex justify-center items-center gap-4 h-screen'>
      {Array.from({ length: 7 }).map((_, idx) => (<div key={idx} className='w-60 h-100 bg-amber-500'></div>))}
    </div>
  )
}

export default TasksPage;