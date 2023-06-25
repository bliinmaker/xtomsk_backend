import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
	{
		message: {
			type: String,
			required: [true, 'Message is required field'],
		},
		image: {
			type: String,
			required: [true, 'Image is required field'],
		},
	},
	{
		timestamps: true,
	}
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
