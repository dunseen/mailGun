import express from 'express'
import sendMailController from '../controllers/sendMail'
import logMailController from '../controllers/logMail'

const router = express.Router()

router.post('/send', sendMailController)
router.get('/logs', logMailController)

module.exports = router
