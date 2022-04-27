import { BlogCreateDto } from "../interfaces/blog/BlogCreateDto";
import { BlogUpdateDto } from "../interfaces/blog/BlogUpdateDto";
import { BlogResponseDto } from "../interfaces/blog/BlogResponseDto";
import Blog from "../models/Blog"

// Post
const createBlog = async (blogCreateDto: BlogCreateDto) => {
    try {
        const blog = new Blog({
            title: blogCreateDto.title,
            writer: blogCreateDto.writer,
            context: blogCreateDto.context,
            createdAt: blogCreateDto.createAt
        });

        await blog.save();

        const data = {
            _id: blog._id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Put
const updateBlog = async (blogId: string, blogUpdateDto: BlogUpdateDto) => {
    try {
        const updateBlog = {
            title: blogUpdateDto.title,
            context: blogUpdateDto.context,
            updatedAt: blogUpdateDto.updatedAt
        }

        await Blog.findByIdAndUpdate(blogId, updateBlog);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Get
const findBlogById = async (blogId: string) => {
    try {
        const blog: BlogResponseDto | null = await Blog.findById(blogId);
        return blog;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Delete
const deleteBlog = async (blogId: string) => {
    try {
        await Blog.findByIdAndDelete(blogId);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createBlog,
    updateBlog,
    findBlogById,
    deleteBlog
}