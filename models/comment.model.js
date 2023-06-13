import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		message: {
			type: String,
			required: [true, 'Message is required field'],
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
