import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
	{ title: String, description: String },
	{
		timestamps: true,
	}
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
