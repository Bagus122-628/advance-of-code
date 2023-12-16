import { first_num, last_num } from "@lib/number";
import { expect, test } from 'bun:test';

const input = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`
test('2023/day-1/part-2', () => expect(sum_of_calibration(input)).toEqual(281))

function sum_of_calibration(input: string) {
    return input.trim().split('\n').reduce((acc, cur) => acc + first_num(cur) * 10 + last_num(cur), 0)
}
