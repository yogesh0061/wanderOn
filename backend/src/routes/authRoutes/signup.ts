import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import User from "../../models/userModel";
import { Password } from "../../services/passwords";

const router = express.Router();

router.post(
  "/",
  [
    
    body("name").escape().trim().notEmpty().withMessage("name is required"),
    body("email").isEmail().normalizeEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Password is required"),
  ],
  async (req: Request, res: Response) => {
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {

      

      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).send("Email is already registered");
      }
      const hashed = await Password.toHash(password);

      const newUser = new User({
        name,
        email,
        password: hashed  
      });

      await newUser.save();
      return res.status(200).send("User created successfully");
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).send("Server Error");
    }
  }
);

export default router;
