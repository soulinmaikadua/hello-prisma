import { PrismaClient } from '@prisma/client'
import express from 'express'
const prisma = new PrismaClient()

const router = express.Router()

router.get('/', async (req, res) => {
	const posts = await prisma.post.findMany({})
	res.json(posts)
})
router.post('/', async (req, res) => {
	const { title, content, authorEmail } = req.body
	const post = await prisma.post.create({
		data: {
			title,
			content,
			published: false,
			author: { connect: { email: authorEmail } }
		}
	})
	res.json(post)
})

export default router
