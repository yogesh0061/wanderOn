import { Token } from "../services/token";
import { Request, Response } from "express";


export const authMiddleWare = (req: Request, res: Response, next: any) => {
  const token = req.cookies["authToken"];

  try {
    const result = Token.verifyToken(token);
    if (result) {

        const decoded = Token.decodeJwt(token)
        req.body.name = decoded.name;
        req.body.email= decoded.email; 
        
      next();
    } else {
      res.status(401).send("unauthorized user");
    }
  } catch (error) {
    res.status(401).send("unauthorized user");
  }
};
