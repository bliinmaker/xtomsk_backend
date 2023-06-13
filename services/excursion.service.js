import Excursion from '../models/excursion.model.js'

export const findAll = async ({ title }) => {
	const excursions = await Excursion.find({ title })

	return excursions
}