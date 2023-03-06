const json = `{
    "data1": [1,2,3],
    "data2": [4,5,6],
    "data3": [7,8,9]
}`

const arr = Object.values(JSON.parse(json))

const getArraySum = (data) => data.reduce((acc, value) => acc + value, 0)

const sumOfArrValues = arr.reduce((acc, value) => {
  return acc + getArraySum(value)
}, 0)

console.log(sumOfArrValues)