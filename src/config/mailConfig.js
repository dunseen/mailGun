export default {
  auth: {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  },
  default: {
    from: ` Direto Tech <noreplay@diretotech.com.br>`,
  },
}
