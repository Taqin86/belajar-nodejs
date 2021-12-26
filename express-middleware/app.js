const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'))

// Application level middleware
app.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next();
})

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Rizqi Taqin',
      email: 'Rizqi@gmail.com'
    },
    {
      nama: 'Dhamar',
      email: 'dhamar@gmail.com'
    },
    {
      nama: 'Ari',
      email: 'Ari@gmail.com'
    },
  ]
  res.render('index', {
    layout: 'layouts/main-layout',
    nama: 'Rizqi Taqin', 
    title: 'Halaman Home',
    mahasiswa,
});  
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'Halaman About'
  });
})

app.get('/contact', (req, res) => {  
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact'
  });
})

app.get('/product/:id', (req, res) => {  
  res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`);
})


app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
