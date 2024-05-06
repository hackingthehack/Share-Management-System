const express=require('express');
const router=express.Router();
const {protect}=require('../middleware/authMiddelware');
const upload = require('../middleware/upload');
const { getNewBuyer, createNew, getBuyerById, deleteNewBuyer } = require('../controllers/newBuyer');

router.get('/',protect, getNewBuyer);
router.get('/shareholder_registration/:id',protect, getBuyerById);
router.post('/',upload.single('image'), createNew);
router.delete('/:id', deleteNewBuyer);


module.exports=router;
