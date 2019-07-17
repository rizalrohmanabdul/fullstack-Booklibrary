const bookModel = require('../models/book.js')
const help = require('../helpers/helpers')

module.exports = {
  getBook: (req, res) => {
    bookModel.getBook()
      .then((resultBook) => {
        const result = resultBook
        help.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  insertBook: (req, res) => {
    const data = {
      id_kategori: req.body.id_kategori,
      nama_buku: req.body.nama_buku,
      pengarang: req.body.pengarang,
      gbr: req.body.gbr,
      status: 'ada'
    }

    bookModel.insertBook(data)
      .then((resultBook) => {
        const result = resultBook
        help.response(res, result, 200, data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  updateBook: (req, res) => {
    const id_buku = req.params.id_book
    const data = {
      id_kategori: req.body.id_kategori,
      nama_buku: req.body.nama_buku,
      pengarang: req.body.pengarang,
      gbr: req.body.gbr
    }
    bookModel.updateBook(id_buku, data)
      .then((resultBook) => {
        const result = resultBook
        help.response(res, result, 200, [id_buku, data])
      })
      .catch((error) => {
        console.log(error)
      })
  },
  deleteBook: (req, res) => {
    const id_buku = req.params.id_book
    bookModel.deleteBook(id_buku)
      .then((resultBook) => {
        const result = resultBook
        help.response(res, result, 200, id_buku)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
