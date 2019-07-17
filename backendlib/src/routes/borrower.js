
const express = require('express')
const Route = express.Router()

const borrowerController = require('../controllers/borrower')
 
Route 
  .get('/', borrowerController.getBorrower)
  .post(`/`, borrowerController.insertBorrower)
  .patch(`/:id_ktp`, borrowerController.updateBorrower)
  .delete(`/:id_ktp`, borrowerController.deleteBorrower)

module.exports = Route
