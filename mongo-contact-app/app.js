const { ansi16 } = require('color-convert');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// Setup EJS
app.set('view engine', 'ejs'); // gunakan ejs
app.use(expressLayouts); // Third-party Middleware
app.use(express.static('public')); // Built-in middleware
app.use(express.urlencoded( {extended: true}));

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash())

// Halaman Home
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
});

// Halaman About
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'Halaman About'
  });
});

// Halaman Contact
app.get('/contact', async(req, res) => { 

  // Contact.find().then((contact) => {
  //   res.send(contact)
  // })
  const contacts = await Contact.find();

    res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contacts,
    msg: req.flash('msg')
  });
})

// halaman detail contact
app.get('/contact/:nama', async(req, res) => { 
  const contact = await Contact.findOne({nama: req.params.nama});

    res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Halaman Detail Contact',
    contact
  });
});

app.listen(port, () => {
    console.log(`Mongo Contact App | listening at http:/localhost:${port}`)
})