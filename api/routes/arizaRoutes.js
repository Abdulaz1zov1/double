const express = require('express')
const router = express.Router()
const md5 = require('md5')
const multer = require('multer')
const path = require('path')
const { 
    register, getById, getAll, getDelete, login, getUpdate, getfilter, get2, get3, get4, get5, get6, get7, get8, get9, get10, get11, get12, get13, get14, get15, get16, get17, get18, get19, get20, get21, get22, get23, get24, get25
} = require('../controller/arizaController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/ariza')
    },
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ storage: storage })



// http://185.217.131.79:4000/students/add
router.post('/add', upload.single('bio_img'), register)

router.post('/login', login)

// http://185.217.131.79:4000/students/all
router.get('/all', getAll)

router.get("/v1", getfilter)
router.get("/v2", get2)
router.get("/v2", get2)
router.get("/v3", get3)
router.get("/v4", get4)
router.get("/v5", get5)
router.get("/v6", get6)
router.get("/v7", get7)
router.get("/v8", get8)
router.get("/v9", get9)
router.get("/v10", get10)
router.get("/v11", get11)
router.get("/v12", get12)
router.get("/v13", get13)
router.get("/v14", get14)
router.get("/v15", get15)
router.get("/v16", get16)
router.get("/v17", get17)
router.get("/v18", get18)
router.get("/v19", get19)
router.get("/v20", get20)
router.get("/v21", get21)
router.get("/v22", get22)
router.get("/v23", get23)
router.get("/v24", get24)
router.get("/v25", get25)


// http://185.217.131.79:4000/students/:id
router.get('/:id', getById)

router.put("/:id", getUpdate)

// http://185.217.131.79:4000/students/:id
router.delete('/:id', getDelete)








module.exports = router
