/* eslint-disable guard-for-in */
const container = d3.select('#container')

const write = text => {
  container.append('div').text(text)
}

const processData = data => {
  const processed = data.reduce((acc, curr) => {
    acc.push(curr.Close - curr.Open)
    return acc
  }, [])
  console.log(processed)
  for (let i = 0; i < processed.length; i++) {
    write(processed[i])
  }
}

d3.csv('data.csv')
.then(data => {
  console.log(data)
  processData(data)
})

