import Excursion from '../models/excursion.model.js'

export const findAll = async ({ title }) => {
	const filter = {}

	if (title) {
		filter.title = title
	}

	const excursions = await Excursion.find(filter)

	return excursions
}