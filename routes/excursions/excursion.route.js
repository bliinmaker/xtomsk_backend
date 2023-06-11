import {
	createExcursion,
	getExcursions,
	removeExcursion,
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
	fastify.get('/', getExcursions)

	fastify.post('/', createExcursion)

	fastify.delete('/:id', removeExcursion)
}
