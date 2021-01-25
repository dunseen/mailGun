const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
})

export default async function get(req, res) {
  try {
    mailgun.get(
      `/${process.env.MAILGUN_DOMAIN}/events`,
      {
        begin: 'Thurs, 06 July 2017 09:00:00 -0000',
        ascending: 'yes',
        limit: 30,
      },
      (err, data) => {
        if (err) {
          return res.json(err)
        } else {
          const tracked = data.items.filter(
            (item) => item.event === 'delivered'
          )
          return res.json(tracked)
        }
      }
    )
  } catch (error) {
    console.error(error)
  }
}
