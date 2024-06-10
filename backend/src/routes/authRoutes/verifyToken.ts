import { Request, Response, Router } from 'express';
import { authMiddleWare } from '../../middlewares/authMiddleware';

const router = Router();

router.post("/", authMiddleWare,
    async (req: Request, res: Response) => {

        try {
            const data = {
                name : req.body.name,
                isLoggedin : true
            }
            return res.json(data);

        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send("Server Error");
        }
    }
);

export default router;
