const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
})

export default async function post(req, res) {
  try {
    mailgun.post(
      `/${process.env.MAILGUN_DOMAIN}/templates`,
      {
        template:
          '<div class="entry"><h1>{{title}}</h1> <div class="body">{{body}} </div>',
        name: 'template.test',
        description: 'Um template simples',
      },
      (err, data) => {
        if (err) {
          return res.json(err)
        } else {
          return res.json(data)
        }
      }
    )
  } catch (error) {
    console.error(error)
  }
}
