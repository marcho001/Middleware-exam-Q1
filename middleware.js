const chalk = require('chalk')

function middleware (req, res, next){
  const timeStart = new Date()
  let time = chalk.bold.yellowBright(timeStart.toLocaleString())
  let reqMethod = chalk.bold.greenBright(req.method)
  let reqUrl = chalk.bold.white.bgRed(` ${req.url} `)
  console.log(`${time} | ${reqMethod} form ${reqUrl}`)
  next()
}

module.exports = middleware