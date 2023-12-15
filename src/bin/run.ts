#!/usr/bin/env bun

const file = Bun.file('.env')
const env = await file.text()

const current_day_reg = /CURRENT_DAY=\d+/
const current_year_reg = /CURRENT_YEAR=\d+/

console.log(env);

const day = parseInt(Bun.env.CURRENT_DAY ?? "1")

console.log(day);

console.log(env.replace(current_day_reg, `CURRENT_DAY=${day}`));

