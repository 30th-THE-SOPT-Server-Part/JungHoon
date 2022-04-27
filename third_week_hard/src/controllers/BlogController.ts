import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import responseMessage from "../modules/responseMessage";
import { BlogCreateDto } from "../interfaces/blog/BlogCreateDto";
import { BlogService } from "../services";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { BlogUpdateDto } from "../interfaces/blog/BlogUpdateDto";
import { BlogResponseDto } from "../interfaces/blog/BlogResponseDto";
/**
 *  @route POST /blog
 *  @desc Create Blog
 *  @access Public
 */
const createBlog = async (req: Request, res: Response): Promise<void> => {
    const blogCreateDto: BlogCreateDto = req.body;
    
    try {
        const data: PostBaseResponseDto = await BlogService.createBlog(blogCreateDto);

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, responseMessage.CREATED_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route PUT /blog/:blogId
 *  @desc Update Blog
 *  @access Public
 */
const updateBlog = async (req: Request, res: Response): Promise<void> => {
    const blogUpdateDto: BlogUpdateDto = req.body;
    const { blogId } = req.params;

    try {
        await BlogService.updateBlog(blogId, blogUpdateDto);

        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route GET /blog/:blogId
 *  @desc Get Blog
 *  @access Public
 */
const findBlogById = async (req: Request, res: Response): Promise<void> => {
    const { blogId } = req.params;

    try {
        const data: BlogResponseDto | null = await BlogService.findBlogById(blogId);

        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route DELETE /blog/:blogId
 *  @desc Delete Blog
 *  @access Public
 */
const deleteBlog = async (req: Request, res: Response): Promise<void> => {
    const { blogId } = req.params;

    try {
        await BlogService.deleteBlog(blogId);

        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createBlog,
    updateBlog,
    findBlogById,
    deleteBlog
}