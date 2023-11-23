import { PrismaClient } from '@prisma/client'
import express from 'express'
const prisma = new PrismaClient()

const router = express.Router()

router.get('/', async (req, res) => {
	const posts = await prisma.user.findMany({
		include: {
			posts: true
		}
	})
	res.json(posts)
})

router.post('/signup', async (req, res) => {
	const result = await prisma.user.create({
		data: req.body
	})
	res.json(result)
})
router.put('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const post = await prisma.user.update({
			where: { id: Number(id) },
			data: req.body
		})

		res.json(post)
	} catch (error) {
		res.json({ error: `Post with ID ${id} does not exist in the database` })
	}
})

export default router
