import User from '../models/userSchema'
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import {message} from '../message/message'

const register = async(req: Request, res: Response, next: NextFunction) => {
    var newPassword
    try{
        let {
            id,
            fname,
            lname,
            email,
            Aadhar_number,
            Mobile_number,
            Wallet_address,
            password
        } = await req.body;
        const query = await User.findOne({Aadhar_number}) 
        const salt = 10
        if(query){
            res.status(200).json({status: 200, message: `User already exists by Aadhar Number ${Aadhar_number}`})
        }else{
            await bcrypt.hash(password, salt).then((result) => {
                password = result
            })
            await User.create({
                id,
                fname,
                lname,
                email,
                Aadhar_number,
                Mobile_number,
                Wallet_address,
                password 
            })
            res.status(200).json({status: 200, message: message.userRegistered})
        }
    }catch(err: any){
        res.status(200).json({status: 400, message: err.message})
    }
}

const getAllUser = async(req: Request, res: Response, next: NextFunction) => {
    try{
        let data = await User.find()
        if(data){
            res.status(200).json({data})
        }else{
            res.status(200).json({message: message.notFound})
        }
    }catch(err: any){
        res.status(200).json({message: err.message})
    }
}
export {register, getAllUser}

