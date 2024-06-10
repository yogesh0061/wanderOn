import bcrypt from "bcrypt"

export class Password {

        static  toHash = async (password: string  )=> {
            const hash = await bcrypt.hash(password, 10);
            return hash

        }

    static compare = async (myPlaintextPassword :string, hash:string ) =>{
        const result = await bcrypt.compare(myPlaintextPassword, hash)
        return result;
    }
}


