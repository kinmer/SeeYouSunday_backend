
const express = require('express')
const router = express.Router()
const membersCtrl = require('../controllers/members')


router.get("/", membersCtrl.index);
router.post("/", membersCtrl.create);
router.get("/:id", membersCtrl.show);
router.delete("/:id", membersCtrl.delete);
router.put("/:id", membersCtrl.update);


module.exports = router