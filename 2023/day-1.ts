const file = Bun.file("2023/day-1.txt")

const calibration = await file.text()

const sum = calibration.split('\n')
  .reduce((acc, cur) => {
    const numbers = cur.match(/\d/g)?.map(Number);
    return acc += parseInt(`${numbers?.at(0)}${numbers?.at(-1)}`)
  }, 0)

console.log(sum);

