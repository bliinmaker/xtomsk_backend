import Comment from '../../models/comment.model.js'

const getComment = async (req, reply) => {
	const comments = await Comment.find({})

	reply.code(200).send(comments)
}

const createComment = async (req, reply) => {
	const comment = await Comment.create({
		title: req.body.title,
		description: req.body.description,
	})

	return comment
}

const removeComment = async (req, reply) => {
	const commentId = req.params.commentId
	await Comment.findById(commentId, (err, comment) => {
		if (!err) {
			comment.remove(er => {
				if (!er) {
					reply.send('COMMENT DELETED')
				} else {
					reply.send({ error: er })
				}
			})
		} else {
			reply.send({ error: err })
		}
	})
}

export default async function (fastify, opts) {
	fastify.get('/', getComment)

	fastify.post('/', createComment)

	fastify.put('/', removeComment)
}
