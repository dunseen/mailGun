import nodemailer from 'nodemailer'
import nodemailerMailgun from 'nodemailer-mailgun-transport'

import mailConfig from '../config/mailConfig'

export default async function post(req, res) {
  const { to, subject, text } = req.body

  try {
    const mailData = {
      from: mailConfig.default.from,
      to,
      subject,
      text,
      html: '<h1><Testando o HTML </h1>',
      'o:tracking': 'True',
      'o:tracking-clicks': 'htmlonly',
    }

    const transporter = nodemailer.createTransport(
      nodemailerMailgun(mailConfig.auth)
    )

    transporter.sendMail(mailData, (err, data) => {
      if (err) {
        return res.json({ err })
      } else {
        return res.json(data)
      }
    })
  } catch (error) {
    console.error(error)
  }
}
