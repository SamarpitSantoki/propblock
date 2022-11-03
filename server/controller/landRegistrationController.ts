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
            res.status(200).json({message: message.dataUploadSuccessful, data: data})
        }else{
            res.status(200).json({message: message.dataUploadFailed})
        }
    } catch (err: any) {
        res.status(200).json({message: err.message})
    }
}

const getAllLandRegister = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let data = await landRegistration.find()
        if(data){
            res.status(200).json({data})
        }else{
            res.status(200).json({message: message.notFound})
        }
    } catch (err: any) {
        res.status(200).json({message: err.message})
    }
}
export {landRegister, getAllLandRegister}