import { read_file } from "../../../utils";

let sum = 0

for (const game of await read_file('day-2')) {
    const match = game.match(/(\w+) (\d+)(:) (.*)/)

    if (match == null) {
        throw new Error('no string match')
    }

    const [_, , id, , record] = match

    const cubes: Record<string, Array<number>> = { red: [], green: [], blue: [] }

    for (const sets of record.split(";")) {

        if (match == null) {
            throw new Error('no string match')
        }

        for (const cube of sets.split(", ")) {
            const match = cube.match(/(\d+) (\w+)/)

            if (match == null) {
                throw new Error('no string match')
            }

            const [, count, color] = match

            cubes[color].push(+count)
        }

    }

    sum += Object.keys(cubes).reduce((acc, cur) => {
        return acc * Math.max(...cubes[cur]);
    }, 1);
}

console.log("Possible:", sum);


