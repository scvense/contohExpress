// import express routes
const express = require("express")
const router = express.Router();


router.get('/', (req,res) => {
    res.json({
        Nama : "Richard Muhammad",
        TanggalLahir : "14 Januari 1994",
        JenisKelamin : "Laki-Laki",
        hobi : "Membaca Buku"
    })
})





module.exports = router;