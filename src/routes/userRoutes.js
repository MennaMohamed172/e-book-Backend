const userRouter = require('express').Router();
const { getAllUsers, updatePassword, updateUserData, deleteUser, deleteUserById } = require('../controllers/userController');
const isAuthenticated = require('../middleware/isAuthenticated');
const upload = require('../middleware/multer');
const { validation } = require('../middleware/validation');
const resetSchema = require('../validations/resetPasswordSchema');
const updatePassMiddleware = require('../middleware/changePasswordMiddleware');


userRouter.get('/', getAllUsers);
userRouter.patch('/update-Password', isAuthenticated, updatePassMiddleware, validation(resetSchema), updatePassword);
userRouter.patch('/update-data', isAuthenticated, upload.single('profileImage'), updateUserData);
userRouter.delete('/delete', isAuthenticated, deleteUser);

userRouter.delete('/:id',deleteUserById);

module.exports = userRouter;
