const { ansi16 } = require('color-convert');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const {body, validationResult, check } = require('express-validator');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');
const { result } = require('lodash');

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
});

// halaman form tambah data contact
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layout'
  })
});

// Proses Tambah data contact
app.post('/contact', [
  body('nama').custom(async(value) => {
    const duplikat = await Contact.findOne({nama: value});
    if (duplikat) {
      throw new Error('Nama contact sudah digunakan!');
    }
    return true;
  }),
  check('email', 'Email tidak valid').isEmail(),
  check('nohp', 'No HP tidak valid').isMobilePhone('id-ID'),
], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.render('add-contact', {
      title: 'Form Tambah Data Contact',
      layout: 'layouts/main-layout',
      errors: errors.array()
    })
  } else {
    Contact.insertMany(req.body, (error, result) => {
      // kirimkan flash message 
      req.flash('msg', 'Data contact berhasil ditambahkan!');
      res.redirect('/contact');
    });
  }
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