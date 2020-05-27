const express = require('express')
const app = express()
const port = 3000
const chalk = require('chalk')
const middleware = require('./middleware')


app.get('/', (req, res) => {
  console.log(req.method)
  console.log(req.url)
  const timeStart = new Date()
  let time = chalk.bold.yellowBright(timeStart.toLocaleString())
  let reqMethod = chalk.bold.greenBright(req.method)
  let reqUrl = chalk.bold.white.bgRed(` ${ req.url } `)
  console.log(`${ time } | ${reqMethod} form ${reqUrl}`)
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