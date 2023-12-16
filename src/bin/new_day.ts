#!/usr/bin/env bun

import { CURRENT_YEAR, CURRENT_DAY } from "@lib/config"

const CURRENT_DAY_REG = /CURRENT_DAY=\d+/
const CURRENT_YEAR_RGX = /CURRENT_YEAR=\d+/

const NEXT_DAY = CURRENT_DAY + 1

// make new day file
const file_template = `
import { test, expect } from 'bun:test';

const input = \`

\`
test('2023/day-${NEXT_DAY}/part-1', () => expect(solution(input)).toEqual(13))

function solution(input: string): number {

}
`

const ts_path = Bun.file(`src/solution/${CURRENT_YEAR}/day-${NEXT_DAY}.test.ts`)
await Bun.write(ts_path, file_template);

// change current day on env
const env_path = Bun.file('.env')
const env_file = await env_path.text()
const modified_env_file = env_file.replace(CURRENT_DAY_REG, `CURRENT_DAY=${NEXT_DAY}`)
await Bun.write(env_path, modified_env_file)

