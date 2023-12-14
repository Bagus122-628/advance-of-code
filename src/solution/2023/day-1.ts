import { read_file } from "../../../utils"

const calibration = await read_file("day-1")

const regex = /one|two|three|four|five|six|seven|eight|nine|[0-9]/

const spelled_digit: Record<string, number> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

const to_number = (s: string) => spelled_digit[s] ?? parseInt(s)

const first_number = (s: string) => s.match(regex)?.map(to_number)

const last_number = (s: string) => s.match(new RegExp(regex.source + '$'))?.map(to_number)

const sum = calibration
  .reduce((acc, cur) => {
    const first = first_number(cur)
    const last = last_number(cur)
    return acc += parseInt(`${first}${last}`)
  }, 0)

console.log(sum);
