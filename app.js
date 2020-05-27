const express = require('express')
const app = express()
const port = 3000
const middleware = require('./middleware')


app.get('/', (req, res) => {
  console.log(req.method)
  console.log(req.url)
  const timeStart = new Date()
  console.log(timeStart.getFullYear(), timeStart.getMonth(), timeStart.getDate())
  console.log(timeStart.toLocaleString())
  res.sendFile('/Users/marc/Desktop/AC-project/Middleware-exam/index.html')

})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})