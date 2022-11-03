import express from 'express'
const router = express.Router()
import * as landRegistrationController from '../controller/landRegistrationController'
import multer from 'multer'
// const upload = multer({dest: "uploads/"})
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
});

const multerFilter = (req: any, file: any, cb: any) => {
if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
} else {
    cb(new Error("Not a PDF File!!"), false);
}
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

router.post('/', upload.array("files"), landRegistrationController.landRegister)
router.get('/', landRegistrationController.getAllLandRegister)

export default router;