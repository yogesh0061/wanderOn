import mongoose, { Document, Schema, Model } from 'mongoose';

interface IUser extends Document {
  name: string;
  email :string;
  password: string;
  
}
const userSchema : Schema<IUser> = new mongoose.Schema({
    name: {
        type : String,
        required :true,
        
    },
    email: {
        type : String,
        required :true,
        unique: true
    },
    password :{
        type :String,
        required : true
    }
})

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User
