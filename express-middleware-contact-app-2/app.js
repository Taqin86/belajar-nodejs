const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contact');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'))

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
  const contacts = loadContact();
    res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contacts
  });
})

app.get('/contact/:nama', (req, res) => { 
  const contact = findContact(req.params.nama);
    res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Halaman Detail Contact',
    contact
  });
})


app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
