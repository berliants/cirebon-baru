const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})


app.listen(process.env.PORT || 3000, () => {
  console.log("Server Berhasil Jalan di port 3000")
})