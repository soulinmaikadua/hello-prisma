import { PrismaClient } from '@prisma/client'
import express from 'express'
const prisma = new PrismaClient()

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
	res.json({ message: 'Welcome to Prisma' })
})

import userRoutes from './routes/user.route'
import postRoutes from './routes/post.route'
app.use('/users', userRoutes)
app.use('/posts', postRoutes)

const port = 1234
app.listen(port, () => {
	console.log(`
🚀 Server ready at: http://localhost:${port}
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
})
