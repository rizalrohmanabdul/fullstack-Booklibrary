const express = require('express')
const Route = express.Router()

const borrowingController = require('../controllers/borrowing')
 
Route 
  .get('/', borrowingController.getBorrowing)
  .get('/details/:id', borrowingController.detailBorrowing)
  .post(`/`, borrowingController.insertBorrowing)
  .patch(`/:id_borrowing`, borrowingController.updateBorrowing)
  .patch(`/retruned/:id_borrowing`, borrowingController.retrunedBorrowing)
  .delete(`/:id_borrowing`, borrowingController.deleteBorrowing)

module.exports = Route
