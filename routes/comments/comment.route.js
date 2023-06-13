import {
	createComment,
	getComments,
	removeComment,
} from '../../controllers/comment.controller.js'

export default async function (fastify, opts) {
	fastify.get('/', getComments)

	fastify.post('/', createComment)

	fastify.delete('/:id', removeComment)
}
