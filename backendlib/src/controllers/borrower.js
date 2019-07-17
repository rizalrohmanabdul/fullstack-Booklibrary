const borrowerModel = require('../models/borrower')
const help = require('../helpers/helpers')

module.exports = {
  getBorrower: (req, res) => {
    borrowerModel.getBorrower()
      .then((resultBorrower) => {
        help.response(res, resultBorrower, 200)
      })
      .catch((error)=>{
        console.log(error)
      })
      
  },
  insertBorrower: (req, res) => {
    const data = {
      id_ktp: req.body.id_ktp,
      nama_peminjam: req.body.nama_peminjam,
      alamat: req.body.alamat
    }
    
    borrowerModel.insertBorrower(data)
      .then((resultBorrower) => {
        const result = resultBorrower
        help.response(res, result, 200, data)
      })
      .catch((error) => {
        console.log(error);
      })
  },

  updateBorrower: (req, res) => {
    const id_ktp = req.params.id_ktp
    const data = {
      id_ktp: req.body.id_borrower,
      nama_peminjam: req.body.nama_peminjam,
      alamat: req.body.alamat
    }
    borrowerModel.updateBorrower(id_ktp, data)
      .then((resultBorrower) => {
        const result = resultBorrower
        help.response(res, result, 200, [id_ktp, data])
      })
      .catch((error) => {
        console.log(error);
      })
  },
  deleteBorrower: (req, res) => {
    const id_ktp = req.params.id_ktp

    borrowerModel.deleteBorrower(id_ktp)
      .then((resultBorrower) => {
        const result = resultBorrower
        help.response(res, result, 200, id_ktp)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
