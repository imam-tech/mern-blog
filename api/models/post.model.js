import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.hostinger.com%2Ftutorials%2Fwp-content%2Fuploads%2Fsites%2F2%2F2021%2F09%2Fhow-to-write-a-blog-post.png&tbnid=9hNETiG_vLIuUM&vet=12ahUKEwijmdLx8KyEAxVtfGwGHVwxCT0QMygAegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.hostinger.com%2Ftutorials%2Fhow-to-write-a-blog-post&docid=eiIEqzMGgSvNpM&w=2127&h=934&q=blog%20post%20image&ved=2ahUKEwijmdLx8KyEAxVtfGwGHVwxCT0QMygAegQIARB1'
    },
    category: {
        type: String,
        default: 'uncategorized'
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export default Post;