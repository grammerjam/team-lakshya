import { Router } from "express" ;
import { registerUser , getUser } from "../controllers/user.controller.js" ;
import { upload } from "../middlewares/multer.middleware.js" ;

const router = Router() ;

router.route("/register").post(
    registerUser
) ;
router.route("/login").get(
    getUser 
) ;

export default router ;