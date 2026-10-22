type Props = {
  pairs: {stat: string, value?: number | string}[]
};

const StatsShowcase = ({ pairs }: Props) => (
  <div className='flex flex-col justify-between w-full h-full'>
    {pairs.map(pair => (
      <div 
        key={pair.stat}
        className='flex items-center justify-between gap-1'
      >
        <span className='text-lg text-foreground'>{pair.stat}</span> 
        <div className='h-0.5 flex-1 bg-blue-100' /> 
        <span className='text-lg text-accent-foreground'>{pair.value ?? 0}</span>
      </div>
    ))}
  </div>
);

export default StatsShowcase;