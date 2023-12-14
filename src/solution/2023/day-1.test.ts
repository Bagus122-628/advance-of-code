import { test, expect, describe } from 'bun:test';
import { sum_of_calibration } from './day-1';

test('2023/day-1.part-2', async () => {
    expect(await sum_of_calibration()).toEqual(281);
});
