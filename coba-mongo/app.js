const { mongoClient, ObjectID } = require('mongodb');
const MongoClient = require('mongodb/lib/mongo_client');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'qun';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if(error) {
        return console.log('Koneksi gagal!')
    }
    
    // pilih database
    const db = client.db(dbName);


    // Menambahkan 1 datang ke collection karyawan
    // db.collection('karyawan').insertOne(
    //     {
    //         nama: 'Catur',
    //         email: 'catur@gmail.com'
    //     },
    //     (error, result) => {
    //         if(error) {
    //             return console.log('gagal menambahakan data!');
    //         }
    //         console.log(result);
    //     }
    // )

    // Menambahkan lebih dari 1 data
    // db.collection('karyawan').insertMany(
    //     [
    //         {
    //             nama: 'Catur',
    //             email: 'catur.gmail.com'
    //         },
    //         {
    //             nama: 'Johan',
    //             email: 'johan@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if(error) {
    //             return console.log('data gagal ditambahkan')
    //         }
    //         console.log('data berhasil di tambahkan')
    //     }
    // )

    // // Menampilkan semua data yang ada di collection 'karyawan'
    // console.log(
        // db
        // .collection('karyawan')
        // .find()
        // .toArray((error, result) => {
        //     console.log(result);
        // })


    // Menampilkan data berdasarkan kriteria yang ada di collection 'karyawan'
    // console.log(
    //     db
    //     .collection('karyawan')
    //     .find({ _id: ObjectID('61ca33e7af975a1ad82bade1') })
    //     .toArray((error, result) => {
    //         console.log(result)
    //     })
    // )

    // Mengubah data berdasarkan id
    // const updatePromise = db.collection('karyawan').updateOne(
    //     {
    //         _id:ObjectID('61ca353139e65604a89183b8')
    //     },
    //     {
    //         $set: {
    //             email: 'Johandi@gmail.com'
    //         },
    //     }
    // );

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })


    // Mengubah data lebih dari 1, berdasarkan kriteria
    // db.collection('karyawan').updateMany(
    //     {
    //         nama: 'Catur',
    //     },
    //     {
    //         $set: {
    //             nama: 'Tjaoer',
    //         }
    //     }
    // )


    // Menghapus 1 data
    // db.collection('karyawan').deleteOne(
    //     {
    //         _id: ObjectID('61ca353139e65604a89183b8')
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(error)
    // });


    // Menghapus lebih dari 1 data
    db.collection('karyawan')
    .deleteMany(
        {
            nama: 'Tjaoer'
        }
    ).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(error)
    });



})