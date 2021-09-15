import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
//swagger
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import {options} from './swaggerOptions'

import taskRoutes from './routes/tasks.routes'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.use(taskRoutes)
const specs = swaggerJsDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app


