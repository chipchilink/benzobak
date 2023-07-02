import schedule from '@/admin/schedule.json';
import leaderboards from '@/admin/leaderboard.json';
import summary from '@/admin/summary.json';
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
  
const asc = (a: number, b: number) => a - b;

export const getDays = () => aggregateDates().sort(asc);
export const getFirstDay = () => getDays()[0];

export const getSections = () => ['schedule', 'leaderboard', 'summary'];

export const getFirstSection = () => getSections()[0];
