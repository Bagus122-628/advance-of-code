
export async function read_file() {
    return (await Bun.file(current_path()).text()).split('\n')
}

export function current_path() {
    const stack = new Error()?.stack?.split('\n');
    const stack_path = stack?.at(-1)?.match(/\(([^)]+)\)/);
    const file_path = stack_path?.[1]?.split(':')[0]
    const file = file_path?.replace(/.ts|.test.ts/, '.txt')

    if (file) return file

    throw new Error('file not found')
}