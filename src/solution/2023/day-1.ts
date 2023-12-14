import { first_num, last_num } from "@lib/number"
import { read_file } from "@lib/utils"

export async function sum_of_calibration() {
  const file = await read_file()  
  return file.reduce((acc, cur) => acc + parseInt(`${first_num(cur)}${last_num(cur)}`), 0)
}
