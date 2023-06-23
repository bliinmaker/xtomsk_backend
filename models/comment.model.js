import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
	{
		excursion: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Excursion',
			required: [true, 'Excursion ID is required'],
		},
		message: {
			type: String,
			required: [true, 'Message is required field'],
		},
	},
	{
		timestamps: true,
	}
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
