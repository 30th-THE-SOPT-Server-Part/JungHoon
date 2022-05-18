import { Router } from "express";
import { MovieController } from "../controllers";
import { body } from "express-validator/check";

const router: Router = Router();

router.post('/', [
    body('title')
        .notEmpty()
        .isLength({min: 1, max: 30}),
    body('director')
        .notEmpty()
        .isLength({min: 2, max: 10}),
    body('startDate') // date화 시키고 싶다!!
        .notEmpty()
        .isISO8601()
        .toDate(),
    body('thumbnail'),
    body('story')
        .notEmpty()
], MovieController.createMovie);

router.get('/:movieId', MovieController.findMovieById);

router.get('/', MovieController.findAllMovies);

router.put('/:movieId', MovieController.updateMovie);

export default router;