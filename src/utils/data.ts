interface Dateable {
    month: string;
    day: number;
}

const monthMap: {
    [k: string]: {
        n: number,
        name: string,
        withDay: string
    }
} = {
    'январь': {
        n: 1,
        name: 'январь',
        withDay: 'января',
    },
    'февраль': {
        n: 2,
        name: 'февраль',
        withDay: 'февраля',
    },
    'март': {
        n: 3,
        name: 'март',
        withDay: 'марта',
    },
    'апрель': {
        n: 4,
        name: 'апрель',
        withDay: 'апреля',
    },
    'май': {
        n: 5,
        name: 'май',
        withDay: 'мая',
    },
    'июнь': {
        n: 6,
        name: 'июнь',
        withDay: 'июня',
    },
    'июль': {
        n: 7,
        name: 'июль',
        withDay: 'июля',
    },
    'август': {
        n: 8,
        name: 'август',
        withDay: 'августа',
    },
    'сентябрь': {
        n: 9,
        name: 'сентябрь',
        withDay: 'сентября',
    },
    'октябрь': {
        n: 10,
        name: 'октябрь',
        withDay: 'октября',
    },
    'ноябрь': {
        n: 11,
        name: 'ноябрь',
        withDay: 'ноября',
    },
    'декабрь': {
        n: 12,
        name: 'декабрь',
        withDay: 'декабря',
    },
};

const monthByN = Object.keys(monthMap).reduce((acc, k) => {
    const l = monthMap[k];
    acc[+l.n] = l.name;
    return acc;
}, {} as Record<number, string>);

const t = (x: number) => x <= 9 ? `0${x}` : `${x}`;

/**
 * Схлопывает два поля в одно числовое значение.
 * Гарантируется возрастающий порядок полученного числа.
 * + Нет потери информации. Т.е. мы можем восстановить значение
 * @example
 * normalizedDate({ day: 22, month: 'январь' }) < normalizedDate({ day: 23, month: 'январь' })
 * // потому что
 * 122 < 123
 */
export const normalizedDate = (data: Dateable) => {
    const d = t(data.day);
    const x = data.month;

    try {
        const mm = monthMap[x];
        const m = String(mm.n);
        return Number(m + d);
    }
    catch(e){
        throw new Error(`Скорее всего произошла опечатка в "${x}"`);
    }
};

/**
 * производит обратный переход
 */
export const unnormalizedDate = (n: number): Dateable => {
    const m = Math.trunc(n / 100);
    const d = n - m * 100;

    return {
        day: d,
        month: monthByN[m],
    };
};

export const render = (d: Dateable) => {
    return `${d.day} ${monthMap[d.month].withDay}`;
};
