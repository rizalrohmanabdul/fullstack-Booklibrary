const conn = require('../config/connect')

module.exports = {
  getBorrower: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM tb_peminjam', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertBorrower: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO tb_peminjam SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateBorrower: (id_ktp, data) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE tb_peminjam SET ? WHERE id_ktp=?', [data, id_ktp], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    }) 
  },
  deleteBorrower: (id_ktp) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM tb_peminjam WHERE id_ktp=?', id_ktp, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}