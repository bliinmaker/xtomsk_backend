import AutoLoad from '@fastify/autoload'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import fastifyStatic from '@fastify/static'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const options = {}

const connectMongoOptions = {
	keepAlive: true,
	useUnifiedTopology: true,
	useNewUrlParser: true,
}

export default async function (fastify, opts) {
	try {
		await mongoose.connect(
			'mongodb://localhost:27017/xtomsk',
			connectMongoOptions
		)
	} catch (e) {
		console.error(e)
	}

	await fastify.register(cors, {
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'PATCH'],
	})

	fastify.register(multipart);

	// /user/mount/test/filename.jpg
	// c:\users\Username\filename.jpg
	
	fastify.register(fastifyStatic, {
		root: path.join(__dirname, 'uploads', 'images')
	});

	fastify.get('/uploads/images/:imageName', (req, reply) => {
		reply.sendFile(req.params.imageName)
	})

	fastify.register(AutoLoad, {
		dir: path.join(__dirname, 'plugins'),
		options: Object.assign({}, opts),
	})

	fastify.register(AutoLoad, {
		dir: path.join(__dirname, 'routes'),
		options: Object.assign({}, opts),
	})
}
