import express from 'express';
import * as userRegister from '../controller/userController'
const router = express.Router()

router.post('/', userRegister.register)
router.get('/', )

export default router;