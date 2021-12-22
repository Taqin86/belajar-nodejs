// console.log('Hallo World');

function cetakNama(nama) {
    return `Hallo, nama saya ${nama}`;
}

const PI = 3.14

const mahasiswa = {
    nama : 'Rizqi Taqin', // property
    umur : 21,
    cetakMhs() {
        return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.` ;
    }, // method
};

class Orang {
    constructor() {
        console.log('Objek orang sudah di buat');
    }
};

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang; // kalau membuat class itu aturan namanya harus besar

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// };

module.exports = {cetakNama, PI, mahasiswa, Orang};