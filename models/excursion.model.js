import mongoose from 'mongoose'

const excursionSchema = new mongoose.Schema(
	{ 
		title: {
			type: String,
			required: [true, 'Title is required field']
		}
	
	},
	{
		timestamps: true,
	}
)

const Excursion = mongoose.model('Excursion', excursionSchema)

export default Excursion