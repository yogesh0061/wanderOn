import  jwt  from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";


export interface JwtPayload {
    name: string;
    email : string

}
export class Token{

    static createToken = (credentials : JwtPayload) =>{
        const token = jwt.sign(credentials, process.env.JWT_SECRET_KEY as string);
        return token;
    }
    
    static verifyToken = (token: string)=>{
        const response = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
        return response
    }

    static decodeJwt = (token: string)=>{
        const response : JwtPayload  = jwtDecode(token)
        return response
    }
}