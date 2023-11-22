import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
	{
		firstname: 'Alice',
		lastname: 'Bob',
		email: 'alice@prisma.io',
		phone: '20232922',
		posts: {
			create: [
				{
					title: 'Join the Prisma Slack',
					content: 'https://slack.prisma.io',
					published: true
				}
			]
		}
	},
	{
		firstname: 'Nilu',
		lastname: 'Nilu',
		email: 'nilu@prisma.io',
		phone: '20232922',
		posts: {
			create: [
				{
					title: 'Follow Prisma on Twitter',
					content: 'https://www.twitter.com/prisma',
					published: true
				}
			]
		}
	},
	{
		firstname: 'Mahmoud',
		lastname: 'Mali',
		email: 'mahmoud@prisma.io',
		phone: '20232922',
		posts: {
			create: [
				{
					title: 'Ask a question about Prisma on GitHub',
					content: 'https://www.github.com/prisma/prisma/discussions',
					published: true
				},
				{
					title: 'Prisma on YouTube',
					content: 'https://pris.ly/youtube'
				}
			]
		}
	}
]

async function main() {
	console.log(`Start seeding ...`)
	for (const u of userData) {
		const user = await prisma.user.create({
			data: u
		})
		console.log(`Created user with id: ${user.id}`)
	}
	console.log(`Seeding finished.`)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
