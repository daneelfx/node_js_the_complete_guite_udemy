const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'pug')
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  res.status(404).render('404', { pageTitle: 'Page Not Found' })
})

// app.use('/', (req, res, next) => {
//   console.log('This always runs')
//   next()
// })

// app.use('/add-product', (req, res, next) => {
//   console.log('Holi from second route')
//   // res.send('<p> Holaaaaa </p>')
//   next()
// })

// app.use('/add-product', (req, res, next) => {
//   console.log('Holi from first route')
//   res.send('<h3> Holi </h3>')
// })

app.listen(3000)
