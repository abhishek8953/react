
import { model } from "mongoose";

const User = model('user', { email: String , pass:String});

export default User;

