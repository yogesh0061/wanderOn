import { Request, Response, Router } from 'express';


const router = Router();

router.get("/", 
 
    async (_: Request, res: Response) => {
        try {
            
            res.clearCookie('authToken');
            return res.send("cookie deleted");
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send("Server Error");
        }
    }
);

export default router;
