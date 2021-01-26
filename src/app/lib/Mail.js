import nodemailer from 'nodemailer'
import nodemailerMailgun from 'nodemailer-mailgun-transport'
import mailConfig from '../../config/mailConfig'

export default nodemailer.createTransport(nodemailerMailgun(mailConfig.auth))
