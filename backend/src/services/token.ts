import  jwt  from "jsonwebtoken";

export class Token{

    static createToken = (userName: string) =>{
        const token = jwt.sign({ userName}, process.env.JWT_SECRET_KEY as string);
        return token;
    }
    
    static verifyToken = (token: string)=>{
        const response = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
        return response
    }
}