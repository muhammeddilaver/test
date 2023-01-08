const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Musteriler = require('../models/Musteriler');

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
});

router.post('/auth', (req, res) => {
	const {email, sifre} = req.body;
	
	Musteriler.findOne({email}, (err, musteri) => {
		if(err)
			throw err;

		if(!musteri){
			res.json({
				status: false,
				message: "Authentication user not found."
			});
		} else {
			bcrypt.compare(sifre, musteri.sifre, (err, result) => {
				if(!result){
					res.json({
						status: false,
						message: 'Authentication is failed, wrong password'
					});
				} else {
					const payload = {
						email
					};
					const token = jwt.sign(payload, req.app.get('api_secret_key'), {
						expiresIn: 720
					});
					res.json({
						status: true,
						token
					})
				}
			});
		}
	})
});

module.exports = router;
