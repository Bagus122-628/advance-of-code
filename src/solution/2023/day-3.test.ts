import { expect, test } from 'bun:test';
import file_input from "./day-3.txt";
import { range } from '@lib/number';

test('sum of all part number of day-3.txt', async () => {
    expect(await sum_part_number()).toEqual(4361)
})


async function sum_part_number(input: string = file_input) {
    const line = input.split('\n')
    const w = line?.at(0)?.length ?? 0

    const num: number[] = []

    for (const test of input.matchAll(/\d+/gm)) {
        is_symbol_nearby(input, test.index, test[0].length, w + 1) && num.push(+test[0])
    }

    return num.reduce((acc, cur) => acc + cur, 0)
}

function is_symbol_nearby(input: string, n: number | undefined, len: number, w: number) {
    if (n == undefined) return false

    const t = n <= w ? NaN : n - w
    const r = input[n + len] == '\n' ? NaN : n + len
    const b = n >= input.length - w ? NaN : n + w
    const l = input[n - 1] == '\n' ? NaN : n == 0 ? 0 : n - 1

    const tl = t && l ? t - 1 : t ? t : NaN
    const tr = t && r ? t + len : t ? t : NaN
    const bl = b && l ? b - 1 : b ? b : NaN
    const br = b && r ? b + len : b ? b : NaN

    const sub_matrix = [...range(tl, tr).map(i => input[i]), input[l], input[r], ...range(bl, br).map(i => input[i])].join('')

    const match = sub_matrix.match(/[^.\d\n]/)

    if (match) {
        return true
    }

    return false
}