import { test, expect, describe } from 'bun:test';
import { first_num, last_num } from "@lib/number"
import { read_file } from "@lib/utils"

test('2023/day-1.part-1', async () => {
    expect(await sum_of_calibration()).toEqual(281);
});

test('2023/day-1.part-2', async () => {
    expect(await sum_of_calibration()).toEqual(281);
});

const calibration = await read_file()

async function sum_of_calibration(file: string[] = calibration) {
    return file.reduce((acc, cur) => acc + parseInt(`${first_num(cur)}${last_num(cur)}`), 0)
}
