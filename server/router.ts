import express from 'express'
import userRoutes from './routes/userRoutes'
import landRegistrationRoutes from './routes/landResistrationRoutes'
const router = express.Router()

router.use('/user', userRoutes)
router.use('/user', landRegistrationRoutes)

export default router