import Excursion from '../models/excursion.model.js'

export const findAll = async ({ title, theme, date }) => {
	const filter = {}

	if (title) {
		filter.title = title
	}
	if (theme) {
		filter.theme = theme
	}
	if (date) {
		filter.date = {
			//greater that equal >=
			//2023-05-31 - сработает
			//31.05.2023 - НЕ сработает
			$gte: new Date(date),
		}
	}

	const excursions = await Excursion.find(filter).populate([{
          path: 'comments',
          model: 'Comment',
        }])

	return excursions
}

export const findById = async (id) => {
	const existedExcursion = await Excursion.findById(id)

	if (!existedExcursion) {
		throw new Error('Excursion does not exist!')
	}

	return existedExcursion
}

export const attachComment = async (commentId, excursionId) => {
	
	const excursion = await Excursion.updateOne(
		{ _id: excursionId },
		{ $push: { comments: commentId } }
	)

	return excursion
}