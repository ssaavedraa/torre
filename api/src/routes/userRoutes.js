const {Router} = require('express')

const userControllers = require('../controllers/User/index')

const router = Router()

router.get('/skills', userControllers.getSkills)
router.get('/profile', userControllers.getProfile)

module.exports = router