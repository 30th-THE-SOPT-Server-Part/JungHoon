import { Router } from "express";
import { UserController } from "../controllers";
import { body } from "express-validator";

const router: Router = Router();

router.post('/', [
    body('name')
        .notEmpty()
        .isLength({min: 2, max: 8}),
    body('phone')
        .notEmpty(),
    body('email')
        .isEmail()
        .normalizeEmail(),
    body('age')
        .isInt()
], UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.get('/:userId', UserController.findUserById);
router.delete('/:userId', UserController.deleteUser);

export default router;