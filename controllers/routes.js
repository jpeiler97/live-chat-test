const router = require('express').Router();
const { Message } = require('../models');

router.get('/', async (req, res) => {
	try {
		const messageData = await Message.findAll({
			order: [ [ 'updatedAt', 'DESC' ] ]
		});

		const messages = messageData.map((post) => post.get({ plain: true }));
		res.render('all', { messages });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post('/', (req, res, next) => {
	const io = res.locals['socketio'];
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
