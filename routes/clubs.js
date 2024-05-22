
const express = require('express')
const router = express.Router()
const clubsCtrl = require('../controllers/clubs')


router.get("/", clubsCtrl.index);
router.post("/", clubsCtrl.create);
router.get("/:id", clubsCtrl.show);
router.delete("/:id", clubsCtrl.delete);
router.put("/:id", clubsCtrl.update);
router.post('/:id/addMember', clubsCtrl.addMember);


module.exports = router





