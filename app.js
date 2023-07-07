import AutoLoad from '@fastify/autoload'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import fastifyStatic from '@fastify/static'
import 'dotenv/config'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'

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
			process.env.API_MONGODB_URI,
			// 'mongodb+srv://admin:admin@xtomskcluster.xawbqzg.mongodb.net/xtomsk?retryWrites=true&w=majority',
			//mongodb+srv://admin:admin@allinone.d9ysbto.mongodb.net/xtomsk?retryWrites=true&w=majority
			connectMongoOptions
		)
	} catch (e) {
		console.error(e)
	}

	await fastify.register(cors, {
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'PATCH'],
	})

	fastify.register(multipart)

	// /user/mount/test/filename.jpg
	// c:\users\Username\filename.jpg

	fastify.register(fastifyStatic, {
		root: path.join(__dirname, 'uploads', 'images'),
	})

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
