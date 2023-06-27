const express = require('express')

const router = express.Router();


/**
* Product
*/
router.get('/product', (req, res) => {
		res.json({ message: req.some});
});

router.get('/product/:id', (req, res) => {});

router.put('/product/:id', (req, res) => {});

router.post('/product', (req, res) => {});

router.delete('/product/:id', (req, res) => {});

module.exports  = router;
