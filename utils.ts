export async function read_file(file_name: string) {
    return (await Bun.file(`2023/${file_name}.txt`).text()).split('\n')
}

export function read_file_stream(file_name: string) {
    return Bun.file(`2023/${file_name}.txt`).stream()
}
