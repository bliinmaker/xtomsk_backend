import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required field'],
		},
		image: {
			String,
		},
	},
	{
		timestamps: true,
	}
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
