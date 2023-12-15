#!/usr/bin/env bun

import { CURRENT_YEAR, NEXT_DAY } from "@lib/config"

const current_day_reg = /CURRENT_DAY=\d+/
const current_year_reg = /CURRENT_YEAR=\d+/

// make new day file
const file_template = "import { test, expect, describe } from 'bun:test';"
const ts_path = Bun.file(`src/solution/${CURRENT_YEAR}/day-${NEXT_DAY}.test.ts`)
await Bun.write(ts_path, file_template);

// make new txt file
const txt_path = Bun.file(`src/solution/${CURRENT_YEAR}/day-${NEXT_DAY}.txt`)
await Bun.write(txt_path, '');

// change current day on env
const env_path = Bun.file('.env')
const env_file = await env_path.text()
const modified_env_file = env_file.replace(current_day_reg, `CURRENT_DAY=${NEXT_DAY}`)
await Bun.write(env_path, modified_env_file)

