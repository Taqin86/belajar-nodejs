const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/qun', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});



// // Menambah 1 data
// const contact1 = new Contact({
//     nama: 'Dhamar Genzo',
//     nohp: '08956731829',
//     email: 'Dhams@gmail.com'
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));