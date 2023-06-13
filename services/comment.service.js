import Comment from '../models/excursion.model.js'

export const findAll = async ({ title }) => {
	const comments = await Comment.find({ title })

	return comments
}