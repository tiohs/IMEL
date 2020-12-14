const multer = require('multer');
const path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

module.exports = {
    storage : multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, path.resolve(__dirname , '..', 'uploads'));
        },
        filename : (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${path.extname(file.originalname)}`);
        }
    })
};