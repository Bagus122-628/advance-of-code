import { expect, test } from 'bun:test';
import file_input from "./day-3.txt";
import { range } from '@lib/number';

test('sum of all part number of day-3.txt', async () => {
    expect(await sum_part_number()).toEqual(467835)
})


async function sum_part_number(input: string = file_input) {
    const line = input.split('\n')
    const w = line?.at(0)?.length ?? 0

    const num: { [key: number]: string } = {}

    for (const test of input.matchAll(/\d+/gm)) {
        const tow_gear = get_gear_index(input, test.index, test[0].length, w + 1)
        if (tow_gear) {
            num[tow_gear] = (num[tow_gear] ?? "") + test[0] + "*"
        }
    }

    return Object.values(num).map(v => {
        const a = v.split('*').filter(v => v);

        if (a.length > 1) return a.map(Number).reduce((acc, cur) => acc * cur, 1)

        return 0
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

    const index = [...range(tl, tr), l, r, ...range(bl, br)]

    const i = index
        .find(i => {
            const match = input[i]?.match(/\*/)
            if (match) return true
        })

    if (i) return i
    else return NaN
}