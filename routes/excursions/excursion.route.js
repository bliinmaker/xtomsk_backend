import {
	createExcursion,
	getExcursion,
	getExcursions,
	removeExcursion,
	getRateExcursion,
	postRateExcursion,
} from '../../controllers/excursion.controller.js'

// export const ExcursionJsonScheme = {
//   type: 'object',
//   properties: {
//     _id: { type: 'string' },
//     title: { type: 'string' },
//   },
// };

// const getExcursionsOpts = {
//   schema: {
//     response: {
//       200: {
// type: 'array',
// // items: ExcursionJsonScheme,
//   }
//     },
//   },
//   handler: getExcursions,
// };

export default async function (fastify, opts) {
	// excursion
	fastify.get('/', getExcursions)

	fastify.get('/:id', getExcursion)

	fastify.post('/', createExcursion)

	fastify.delete('/:id', removeExcursion)

	// rating
	fastify.get('/:id/rating', getRateExcursion)

	fastify.post('/:id/rating', postRateExcursion)
}
