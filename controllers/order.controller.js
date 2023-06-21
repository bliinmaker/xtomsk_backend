import Order from '../models/order.model.js'
import { findAll, findById } from '../services/order.service.js'

export const getOrders = async (req, reply) => {
	try {
		const { query } = req

		const orders = await findAll({
			title: query?.title,
		})

		return reply.code(200).send(orders)
	} catch (error) {
		console.error(error)
		return reply.code(400).send({ status: 400, message: 'entity not found' })
	}
}

export const createOrder = async (req, reply) => {
	try {
		const { nameOfTheTour, name, surname, phone, email } = req.body
		const order = await Order.create({
			nameOfTheTour: nameOfTheTour || null,
			name: name || null,
			surname: surname || null,
			phone: phone || null,
			email: email || null,
		})

		return order
	} catch (error) {
		console.error(error)
		return reply.code(400).send(error)
	}
}

export const removeOrder = async (req, reply) => {
	try {
		const order = await Order.findByIdAndDelete(req.params.id)

		return order
	} catch (error) {
		console.error(error)
		return reply.code(400).send({ status: 404, message: 'entity not found' })
	}
}

export const getOrder = async (req, reply) => {
	try {
		const order = await findById(req.params.id)

		return order
	} catch (error) {
		console.error(error)
		return reply.code(400).send({ status: 400, message: 'entity not found' })
	}
}
