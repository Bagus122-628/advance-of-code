import { test, expect } from 'bun:test';
import puzzle from "./puzzle.txt";

const input = `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
`
test('2023/day-4/part-1', () => expect(scratchcards_point(input)).toEqual(13))
test('2023/day-4/part-2', () => expect(total_scratchcards(input)).toEqual(30))

function scratchcards_point(input: string): number {
    return input.trim().split('\n').reduce((sum, card) => {
        const [_, wn, yn] = card.split(/: |\| /)
        const point = matching(wn, yn)

        return !point ? sum : sum + parseInt(point, 2)
    }, 0)
}

function total_scratchcards(input: string): number {
    const line = input.trim().split('\n')
    const instances = Array.from({ length: line.length }, () => 1);

    for (const card of line) {
        const [g, wn, yn] = card.split(/: |\| /)
        const cn = parseInt(g.split(/\s+/).at(1) ?? '');
        const point = matching(wn, yn)

        update_instance(point, cn, instances);
    }
    return instances.reduce((total, instance) => total + instance, 0);

}

function update_instance(point: string, cn: number, instances: number[]) {
    for (let i = 0; i < point.length; i++) {
        if (cn + i < instances.length) {
            instances[cn + i] = instances[cn + i] + instances[cn - 1];
        }
    }
}

function matching(wining_card: string, your_card: string) {
    return wining_card.split(/\b\s/).reduce((point, n) => {
        const match = your_card.match(new RegExp(n + "\\b"))?.[0]
        return match ? point ? point += 0 : point += 1 : point
    }, "")
}

