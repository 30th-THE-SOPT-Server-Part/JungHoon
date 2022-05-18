import express, { Request, Response } from "express";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import { MovieService } from "../services";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";

/**
 *  @route POST /movie
 *  @desc Create Movie
 *  @access Public
 */
const createMovie = async (req: Request, res: Response) => {
    const movieCreateDto: MovieCreateDto = req.body;
    try {
        const data = await MovieService.createMovie(movieCreateDto);

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_MOVIE_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createMovie
}