'use client'

import * as D from '@/utils/data';
import * as _ from '@/app/core/';
import * as NavBar from '@/app/components/NavBar';
import { useHelped } from '@/app/state';
import { Day } from './Day';
import style from './Day.module.scss';

const daymapper = (value: number) => {
    const display = D.render(D.unnormalizedDate(value));
    return {
      display,
      value,
    };
};

const sectionMapper = (value: string) => {
    switch(value){
        case 'schedule': return 'Расписание';
        case 'leaderboard': return 'Турнирная таблица';
        case 'summary': return 'Итоги';
        default: return '';
    }
};

const Days = () => {
    const days = _.getDays().map(daymapper);

    return (
        <div className={style.container}>
            {days.map((day) => {
                return <Day key={day.value} {...day} />
            })}
        </div>
    );
};

const sport = {
    day: (d: number) => ({
        page: (p: string) => `/sport/${d}/${p}`,
    })
};

const Item = (p: { section: string }) => {
    const H = useHelped();
    const to = sport.day(H.getCurrentDay());

    const onClick = () => {
        H.pushSection(p.section);
    };

    return (
        <NavBar.Item
            href={to.page(p.section)}
            onClick={onClick}
            level={3}>
            {sectionMapper(p.section)}
        </NavBar.Item>
    );
};

export default (p: { children: React.ReactNode }) => {
    const sections = _.getSections();
 
    return (
      <div>
        <Days />
        <NavBar.Container>
            {sections.map((section) => {
                return (
                    <Item key={section} section={section} />
                );
            })}
        </NavBar.Container>
        {p.children}
      </div>
    );
  }