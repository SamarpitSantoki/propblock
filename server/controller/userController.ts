import User from '../models/userSchema'
import dbConnect from '../config/database'


export async function register(){
    await dbConnect();
}

