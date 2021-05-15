const router = require('express').Router();
const { Message } = require('../../models');

router.post('/', (req, res) => {
	console.log(req);
});

module.exports = router;
