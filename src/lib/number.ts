const num_reg = /one|two|three|four|five|six|seven|eight|nine|[0-9]/

const str_num: Record<string, number> = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
}

export function to_num(s: string) {
    return str_num[s] ?? +s
}

export function first_num(s: string) {
    return s.match(num_reg)?.map(to_num).at(0) ?? NaN
}

export function last_num(s: string, i = -1) {
    let match = s.slice(i).match(num_reg)

    if (match) return match.map(to_num).at(0) ?? NaN

    if (s.length - i == 0) return NaN

    return last_num(s, i - 1)
}


export function range(s: number, l: number) {
    return Array.from({ length: l - s + 1 }, (_, i) => s + i);
}
