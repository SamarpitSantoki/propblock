import landRegistration from '../models/landRegistrationSchema'
import { Request, Response, NextFunction } from 'express';
import {message} from '../message/message'

const landRegister = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {
          landOwner,
          landLocation,
          gpsCoordinate,
          isSellable,
          isConfiscated,
          onAuction,
          landDescription
        } = await req.body;
        let fileUpload = await req.files;
        let data = await landRegistration.create({
          landOwner,
          landLocation,
          gpsCoordinate,
          isSellable,
          isConfiscated,
          onAuction,
          landDescription
        })
        if(data){
            res.status(200).json({message: 'Data uploaded successfully', data: data})
        }else{
            res.status(200).json({message: 'Data upload failed'})
        }
    } catch (err: any) {
        res.status(200).json({message: err.message})
    }
}

export {landRegister}