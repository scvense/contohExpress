const express = require ('express')
const app = express()
const apiRouter = require ("./DataSiswa")


app.get('/', (req,res) => {
    res.send('Selamat Datang Di Data Center Siswa Indonesia')
});


app.use ("/DataSiswa", apiRouter)



app.listen (8080, () => {
    console.log('server berjalan di port 8080')
})