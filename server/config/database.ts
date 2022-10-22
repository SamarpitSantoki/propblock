import express from 'express';
import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI

async function dbConnect(){
    
    await mongoose.connect('mongodb+srv://sarthak:sarthak@cluster0.npbd5.mongodb.net/?retryWrites=true&w=majority').then(() => { console.log('Database Connected');
    }).catch((err) => (console.log('Database not connected')));
}

export default dbConnect;
