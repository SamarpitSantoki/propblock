import express from 'express';
import dbConnect from '../config/database';
import * as userRegister from '../controller/userController'
const router = express.Router()

router.post('/register', userRegister.register)

export default router;