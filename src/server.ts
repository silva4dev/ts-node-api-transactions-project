import { app } from './app'
import { env } from './env'

app.listen({ port: env.PORT, host: 'localhost' }).then(() => {
  console.log('HTTP Server Running!')
})
