import { PrismaClient } from '@prisma/client'
import express from 'express'
const prisma = new PrismaClient()

const router = express.Router()

router.get('/', async (req, res) => {
	const posts = await prisma.user.findMany({})
	res.json(posts)
})

export default router
