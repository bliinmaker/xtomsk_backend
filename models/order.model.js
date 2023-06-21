import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
	{
		nameOfTheTour: {
			type: String,
			required: [true, 'Name of the tour is required field'],
		},
		name: {
			type: String,
			required: [true, 'Name is required field'],
		},
		surname: {
			type: String,
			required: [true, 'Surname is required field'],
		},
		phone: {
			type: String,
			required: [true, 'Phone is required field'],
		},
		email: {
			type: String,
			required: [true, 'Email is required field'],
		},
	},
	{
		timestamps: true,
	}
)

const Order = mongoose.model('Order', orderSchema)
export default Order
