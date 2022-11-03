import express from 'express'
const router = express.Router()
import * as landRegistrationController from '../controller/landRegistrationController'
import multer from 'multer'
const upload = multer({dest: "uploads/"})

router.post('/', upload.array("files"), landRegistrationController.landRegister)

export default router;