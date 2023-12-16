import { expect, test } from 'bun:test';

const input = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`
test('2023/day-2/part-2', () => expect(cube_conundrum(input)).toEqual(2286))

function cube_conundrum(input: string) {
    return input.trim().split('\n').reduce((sum, game) => {
        const match = game.match(/(\w+) (\d+)(:) (.*)/)

        if (match == null) return 0
        const [, , , , record] = match

        const red = max_color(record, 'red')
        const green = max_color(record, 'green')
        const blue = max_color(record, 'blue')

        return sum + red * green * blue

    }, 0)
}

function max_color(set: string, color: string) {
    const match = set.match(RegExp(`\\d+ ${color}`, 'g'))
    return match ? Math.max(...(match.map(v => +v.split(" ")[0]))) : 0
}