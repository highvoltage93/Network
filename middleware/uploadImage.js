const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS')
        cb(null, `${date}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'picturePost/jpeg' || file.mimetype === 'picturePost/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const limit = {
    fileSize: 1024 * 1024 * 5
}


module.exports = multer({ storage, fileFilter, limit })