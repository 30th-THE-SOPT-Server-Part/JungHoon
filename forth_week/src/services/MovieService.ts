import Movie from "../models/Movie";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import { MovieResponseDto } from "../interfaces/movie/MovieResponseDto";

const createMovie = async (movieCreateDto: MovieCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const movie = new Movie({
            title: movieCreateDto.title,
            director: movieCreateDto.director,
            startDate: movieCreateDto.startDate,
            thumbnail: movieCreateDto.thumbnail,
            story: movieCreateDto.story
        });

        await movie.save();

        const data = {
            _id: movie.id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findMovieById = async (movieId: string): Promise<MovieResponseDto | null> => {
    try {
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return null;
        }
        return movie;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createMovie,
    findMovieById,
}