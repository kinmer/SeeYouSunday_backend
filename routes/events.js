
const express = require('express')
const router = express.Router()

const eventsCtrl = require('../controllers/events')


router.post('/:id/events', eventsCtrl.create);
router.get('/:id/events', eventsCtrl.index);
router.delete('/:id/events/:eventId', eventsCtrl.delete);

module.exports = router;
