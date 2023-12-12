const file = Bun.file("2023/day-1.txt")

const calibration = await file.text()

const lines = calibration.split('\n')

console.log(lines);

let sum = 0
for (const line of lines) {
  const numbers = line.match(/\d+/g);

  sum += parseInt(`${numbers?.at(0)}${numbers?.at(-1)}` || "0");
  console.log(sum);


}

console.log(sum);

