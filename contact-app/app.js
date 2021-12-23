// Core Module
// File System
const fs = require('fs');
const { stdout } = require('process');

// menuliskan string ke file(synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!');
// } catch(e) {
//     console.log(e)
// }

// menuslis string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello world secara Asynchronous', (e) => {
//     console.log(e);
// });

// membaca isi file(synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi ile(asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (e, data) => {
//     if (e) throw e;
//     console.log(data);
// })


// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('masukkan nomor HP anda: ', (noHP) => {
        const contact = { nama, noHP };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts =  JSON.parse(file);
        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Terima kasih sudah mengirim data');


        rl.close();
    })
})