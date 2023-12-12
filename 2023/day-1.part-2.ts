const file = Bun.file("2023/day-1.part-2.txt")

const calibration = await file.text()

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

function last_number(s: string, i = -1) {
    let match = s.slice(i, s.length).match(regex)

    if (match) {
        return match.map(to_number)
    }

    if (s.length - i == 0) {
        return 0
    }

    return last_number(s, i - 1)
}

const sum = calibration.split('\n')
    .reduce((acc, cur) => {
        const first = first_number(cur)
        const last = last_number(cur)
        return acc += parseInt(`${first}${last}`)
        console.log(cur);
        console.log(first);
        console.log(last);

        return 0
    }, 0)

console.log(sum);