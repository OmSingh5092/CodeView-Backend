const express = require('express');
const router = express.Router();

const notesCtrl = require('../controllers/notesCtrl');
const verifyUser = require('../middlewares/verifyMW').user;

router.get('/get',verifyUser,notesCtrl.getNote);
router.post('/update',verifyUser,notesCtrl.updateNote);

module.exports = router;