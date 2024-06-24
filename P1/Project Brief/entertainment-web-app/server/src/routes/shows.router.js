import { Router } from 'express';
import { getShows , postShow } from "../controllers/show.controller.js" ;
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router.route('/shows').get( 
    getShows
);

router.route('/post/shows').post( 
    postShow
);

export default router ;