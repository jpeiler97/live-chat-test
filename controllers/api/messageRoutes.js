const router = require('express').Router();
const { Message } = require('../../models');

router.post('/', (req, res) => {
	console.log(req);
	try {
		console.log('request body ' + req.body);
		const messageData = Message.create({
			name: req.body.name,
			text: req.body.text
		});

		res.status(200).json(messageData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
