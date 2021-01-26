import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { client } = data

    await Mail.sendMail({
      from: ' Direto Tech <noreplay@diretotech.com.br>',
      to: `Olá ${client.name} < ${client.email}>`,
      subject: 'Testando a Fila',
      template: 'template.test',
      'v:name': 'Davys lima',
      'v:document': 'XXX-XXX-432-51',

      'o:tracking': 'True',
      'o:tracking-clicks': 'htmlonly',
    })
  },
}
