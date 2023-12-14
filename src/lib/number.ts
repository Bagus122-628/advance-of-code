const num_reg = /one|two|three|four|five|six|seven|eight|nine|[0-9]/
const rev_num_reg = /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|[0-9]/

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
    orez: 0,
    eno: 1,
    owt: 2,
    eerht: 3,
    ruof: 4,
    evif: 5,
    xis: 6,
    neves: 7,
    thgie: 8,
    enin: 9
}

export function to_num(s: string, reg: RegExp = num_reg) {
    const match = s.match(reg)?.at(0)

    console.log(s, match)
    

    if (!match) {
        return 0
    }

    return str_num[match] ?? +match
}

export function first_num(s: string) {
    return to_num(s, num_reg)
}

export function last_num(s: string) {
    return to_num(s.split('').reverse().join(''), rev_num_reg)
}