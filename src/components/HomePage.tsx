import StatsShowcase from './StatsShowcase';
import { Separator } from '@base-ui/react/separator';
import { Bar, BarChart, PieChart, Pie,  XAxis } from "recharts"
import { 
  ChartContainer, 
  type ChartConfig, 
  ChartLegend, 
  ChartLegendContent 
} from '../shadcn/components/ui/chart';
import { cn } from 'cn';

const chartConfig = {
  bestWeek: {
    label: 'Best Week'
  },
    prevWeek: {
    label: 'Previous Week'
  }
} satisfies ChartConfig;

const chartData = [
  { day: "Mon", prevWeek: 186, bestWeek: 80 },
  { day: "Tue", prevWeek: 305, bestWeek: 200 },
  { day: "Wed", prevWeek: 237, bestWeek: 120 },
  { day: "Thu", prevWeek: 73, bestWeek: 190 },
  { day: "Fri", prevWeek: 209, bestWeek: 130 },
  { day: "Sat", prevWeek: 214, bestWeek: 140 },
  { day: "Sun", prevWeek: 254, bestWeek: 120 }
];

const pairs = [
  { stat: 'Current streak', value: 5 },
  { stat: 'Best streak'},
  { stat: 'Lifetime tasks complete', value: 5 },
  { stat: 'Best task', value: 15 },
  { stat: 'Worst task', value: 505 },
];

const pie = [
  { name: 'Complete', value: 223 },
  { name: 'Incomplete', value: 104 }
];

const HomePage = () => (
  <div className='flex items-center justify-center h-screen bg-background'>
    <div className={styles.container}>
      <div className={cn(styles.section, 'w-1/3')}>
        <div className='flex flex-col items-center justify-evenly h-1/2'>
          <div className='w-30 h-30 bg-amber-200 rounded-full' />
          <span className='font-bold text-3xl'>
            Martin
          </span>
        </div>
        <div className='pt-5 h-1/2'>
          <StatsShowcase pairs={pairs} />
        </div>
      </div>
      <Separator 
        orientation='vertical' 
        className='w-0.5 bg-muted' 
      />
      <div className={cn(styles.section, 'w-3/7')}>
        <ChartContainer 
          config={chartConfig}
          className='h-full w-full'
        >
          <BarChart 
            accessibilityLayer 
            data={chartData}
          >
            <XAxis
              dataKey='day'
              tickMargin={12}
              axisLine={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey='bestWeek' fill='var(--chart-4)' radius={2} />
            <Bar dataKey='prevWeek' fill='var(--chart-1)' radius={2} />
          </BarChart>
        </ChartContainer>
      </div>
      <Separator 
        orientation='vertical' 
        className='w-0.5 bg-muted' 
      />
      <div className={cn(styles.section, 'flex-1')}>
        <div className='flex flex-col justify-center items-center justify-items-center gap-0.5 h-1/3 w-auto'>
          <span className='flex items-end'>Next task:</span>
          <span className='font-bold text-4xl'>Brush Teeth</span>
          {/*TODO: Make it so the font gets smaller with larger text*/}
        </div>
        <Separator 
          orientation='horizontal' 
          className='h-0.5 bg-muted' 
        />
        <div className='h-2/3'>
          <PieChart responsive className='h-full pt-5'>
            <Pie
              data={pie}
              dataKey='value'
              cx='50%'
              cy='50%'
              outerRadius='100%'
              fill='var(--chart-1)'
              stroke='var(--card)'
            />
          </PieChart>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  container:
    `flex
    py-10
    h-140 w-2/3
    rounded-2xl
    outline-2 outline-dashed
    bg-card
    text-card-foreground
    hover:scale-102 ease-out transition-[scale]`,
  section:
    `inline-block
    px-10
    h-full`,
  statsList:
    `flex flex-col items-start justify-between 
    h-full 
    text-lg font-bold`
};

export default HomePage;