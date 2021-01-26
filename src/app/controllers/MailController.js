import Queue from '../lib/Queue'

export default {
  async store(req, res) {
    const { email, name } = req.body
    const client = { email, name }

    await Queue.add('RegistrationMail', { client })

    return res.json(client)
  },
}
