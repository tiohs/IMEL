import { diskStorage } from 'multer';
import { resolve, extname } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
