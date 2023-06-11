import AutoLoad from '@fastify/autoload'
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
			'mongodb://localhost:27017/xtomsk',
			connectMongoOptions
		)
	} catch (e) {
		console.error(e)
	}

	fastify.register(AutoLoad, {
		dir: path.join(__dirname, 'plugins'),
		options: Object.assign({}, opts),
	})

	fastify.register(AutoLoad, {
		dir: path.join(__dirname, 'routes'),
		options: Object.assign({}, opts),
	})
}
