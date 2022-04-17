// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  const numbersList = numbers
    .split(' ')
    .map((number) => +number)
    .sort((a, b) => a - b)
    .reverse()

  const index = numbersList.length

  const firstItem = numbersList[0]
  const lastItem = numbersList[index - 1]
  const result = `${firstItem} ${lastItem}`

  return result
}

highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')
highAndLow('1 2 3')
