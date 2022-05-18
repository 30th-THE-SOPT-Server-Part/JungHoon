import Movie from "../models/Movie";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";

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

export default {
    createMovie,
}