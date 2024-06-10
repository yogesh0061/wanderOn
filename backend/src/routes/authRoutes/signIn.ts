import { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import User from "../../models/userModel";
import { Password } from "../../services/passwords";
import { Token } from "../../services/token";

const router = Router();

router.post("/", 
    [
        body("email").isEmail().withMessage("Email must be valid"),
        body("password").trim().notEmpty().withMessage("You must enter a password")
    ],
    async (req: Request, res: Response) => {
       
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(401).send("Invalid Credentials");
            }

            const checkPassword = await Password.compare(password, user.password);

            if (!checkPassword) {
                return res.status(401).send("Invalid Credentials");
            }
            const token = Token.createToken(email) 
            const data = {
                name: user.name,
                email,
                
            };
            res.cookie('authToken', token, {
                httpOnly: true,
              });
            return res.json(data);
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send("Server Error");
        }
    }
);

export default router;
