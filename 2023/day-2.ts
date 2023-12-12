import { read_file } from "../utils";

let possible = 0

const decode = new TextDecoder()

const quest_bag: Record<string, number> = { red: 12, green: 13, blue: 14 }

for (const game of await read_file('day-2')) {
    const match = game.match(/(\w+) (\d+)(:) (.*)/)

    if (match == null) {
        throw new Error('no string match')
    }

    const [_, , id, , record] = match

    let possible_game = true

    for (const sets of record.split(";")) {

        if (match == null) {
            throw new Error('no string match')
        }

        const cubes: Record<string, number> = { red: 0, green: 0, blue: 0 }

        for (const cube of sets.split(", ")) {
            const match = cube.match(/(\d+) (\w+)/)

            if (match == null) {
                throw new Error('no string match')
            }

            const [, count, color] = match

            cubes[color] += (+count)
        }

        possible_game = Object.keys(cubes).every(color => cubes[color] <= quest_bag[color]);

        if (!possible_game) {
            break
        }

        // console.log(_, "\ngame  " + id +':', cubes);
    }

    if (possible_game) {
        possible += +id
    }
}

console.log("Possible:", possible);


