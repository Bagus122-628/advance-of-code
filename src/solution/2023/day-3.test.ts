import { range } from '@lib/number';
import { expect, test } from 'bun:test';

const input = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`
test('2023/day-3/part-2', () => expect(sum_part_number(input)).toEqual(467835))

function sum_part_number(input: string) {
    const line = input.trim().split('\n')
    const w = line?.at(0)?.length ?? 0

    const num: { [key: number]: string } = {}

    for (const test of input.matchAll(/\d+/gm)) {
        const tow_gear = get_gear_index(input, test.index, test[0].length, w + 1)
        tow_gear ? num[tow_gear] = (num[tow_gear] ?? "") + test[0] + "*" : ""
    }

    return Object.values(num).map(v => {
        const a = v.split('*').filter(v => v);
        return a.length > 1 ? a.map(Number).reduce((acc, cur) => acc * cur, 1) : 0
    }).reduce((acc, cur) => acc + cur, 0)
}

function get_gear_index(input: string, n: number | undefined, len: number, w: number) {
    if (n == undefined) return NaN

    const t = n <= w ? NaN : n - w
    const r = input[n + len] == '\n' ? NaN : n + len
    const b = n >= input.length - w ? NaN : n + w
    const l = input[n - 1] == '\n' ? NaN : n == 0 ? 0 : n - 1

    const tl = t && l ? t - 1 : t ? t : NaN
    const tr = t && r ? t + len : t ? t : NaN
    const bl = b && l ? b - 1 : b ? b : NaN
    const br = b && r ? b + len : b ? b : NaN

    const indexes = [...range(tl, tr), l, r, ...range(bl, br)]

    const index = indexes.find(i => input[i]?.match(/\*/) ? true : false)

    return index ? index : NaN
}