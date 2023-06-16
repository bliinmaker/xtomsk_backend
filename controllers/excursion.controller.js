import Excursion from '../models/excursion.model.js'
import { findAll, findById } from '../services/excursion.service.js'

export const getExcursions = async (req, reply) => {
	try {
		const { query } = req

		const excursions = await findAll({
			title: query?.title,
			theme: query?.theme,
			date: query?.date,
		})

		return reply.code(200).send(excursions)
	} catch (error) {
		console.error(error)
		return reply.code(404).send({ status: 404, message: 'entity not found' })
	}
}

export const createExcursion = async (req, reply) => {
	try {
		const { title, theme, description, date, image } = req.body
		const excursion = await Excursion.create({
			title: title || null,
			theme: theme || null,
			description: description || null,
			date: date || null,
			image: image || null,
		})

		return excursion
	} catch (error) {
		console.error(error)
		return reply.code(404).send(error)
	}
}

export const removeExcursion = async (req, reply) => {
	try {
		const excursion = await Excursion.findByIdAndDelete(req.params.id)

		return excursion
	} catch (error) {
		console.error(error)
		return reply.code(404).send({ status: 404, message: 'entity not found' })
	}
}

export const getExcursion = async (req, reply) => {
	try {
		const excursion = findById(req.params.id)

		return excursion
	} catch (error) {
		console.error(error)
		return reply.code(404).send({ status: 404, message: 'entity not found' })
	}
}
