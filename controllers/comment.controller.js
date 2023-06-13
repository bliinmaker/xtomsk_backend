import Comment from '../models/comment.model.js'
import { findAll } from '../services/comment.service.js'

export const getComments = async (req, reply) => {
	try {
		const { query } = req

		const comments = await findAll({ title: query?.title })

		return reply.code(200).send(comments)
	} catch (error) {
		console.error(error)
		return reply.code(404).send({ status: 404, message: 'entity not found' })
	}
}

export const createComment = async (req, reply) => {
	try {
		const { title, message, image } = req.body
		const comment = await Comment.create({
			title: title || null,
			message: message || null,
			image: image || null,
		})

		return comment
	} catch (error) {
		console.error(error)
		return reply.code(404).send(error)
	}
}

export const removeComment = async (req, reply) => {
	try {
		const comment = await Comment.findByIdAndDelete(req.params.id)

		return comment
	} catch (error) {
		console.error(error)
		return reply.code(404).send({ status: 404, message: 'entity not found' })
	}
}
