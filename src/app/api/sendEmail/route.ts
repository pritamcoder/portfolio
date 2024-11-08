import { NextApiRequest } from "next";
import nodemailer from 'nodemailer';


export  async function POST(req:NextApiRequest) {
    const transport=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:"",
            pass:""
        }
    })
    const mailOprions={
        from:"",
        to:"",
        subject:"",
        text:""
    }
    try {
        await transport.sendMail(mailOprions)
    } catch (error) {
        
    }
}