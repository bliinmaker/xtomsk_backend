import mongoose from 'mongoose'

const excursionSchema = new mongoose.Schema(
	{ 
		title: {
			type: String,
			required: [true, 'Title is required field']
		},
		theme: {
			type: String,
			required: [true, 'Themes is required field']
		},
		description: {
			type: String
		},
		date: {
			type: Date,
			required: [true, 'Date is required field']
		},
		image: {
			type: String,
			required: [true, 'Image is required field']
		},
	},
	{
		timestamps: true,
	}
)

const Excursion = mongoose.model('Excursion', excursionSchema)

export default Excursion