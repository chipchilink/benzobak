import schedule from '@/admin/schedule.json';
import leaderboards from '@/admin/leaderboard.json';
import summary from '@/admin/summary.json';
import Test from '@/admin/Residence';
import * as D from '@/utils/data';

const aggregateDates = () => {
  const eventsD = new Set<number>();
  const leaderD = new Set<number>();
  const result = new Set<number>();

  for(const event of schedule){
    const t = D.normalizedDate(event);
    eventsD.add(t);
  }

  for(const leaderboard of leaderboards){
    const t = D.normalizedDate(leaderboard);
    leaderD.add(t);
  }

  for(const total of summary){
    const t = D.normalizedDate(total);
    
    if(eventsD.has(t) && leaderD.has(t)) result.add(t);
  }

  return Array.from(result);
};

export default () => {

  const days = aggregateDates().sort((a, b) => b - a).map((t) => {
    const x = D.unnormalizedDate(t);
    return D.render(x);
  })

  return (
    <div>
      {days.map((x) => {
        return (
          <span key={x}>{x}</span>
        );
      })}
    </div>
  );
}