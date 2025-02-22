
import nodemailer from 'nodemailer';


export  async function POST(req:Request) {
    const data=await req.json()

    const transport=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.GAMIL_USER,
            pass:process.env.GMAIL_APP_PASSWORD
        }
    })
    const mailOprions={
        from:process.env.EMAIL,
        to:"glowup5920@gmail.com",
        subject:`${data.name} send a email`,
        text:data.comment,
        html:`<h1>${data.name} </br> ${data.email} </h1><p>${data.comment}</p>`
    }
    try {
        const success=await transport.sendMail(mailOprions)
        return Response.json(success)
    } catch (error) {
        console.log(error)
    }
    

    
}

/*
const transport=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
        }
    })
    const mailOprions={
        from:process.env.EMAIL,
        to:"glowup5920@gmial.com",
        subject:"",
        text:""
    }
    try {
        await transport.sendMail(mailOprions)
    } catch (error) {
        
    }
*/