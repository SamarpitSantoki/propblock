import express from 'express';
const router = express.Router()

router.get('/login', (req, res) => {
    res.send('Sarthak the great')
})

export default router;