import express from 'express'
import sendMailController from '../app/controllers/sendMail'
import logMailController from '../app/controllers/logMail'
import templateMailController from '../app/controllers/templateMail'
import MailController from '../app/controllers/MailController'

const router = express.Router()

router.post('/send', sendMailController)
router.get('/logs', logMailController)
router.post('/createtemplate', templateMailController)

router.post('/mail', MailController.store)

module.exports = router
