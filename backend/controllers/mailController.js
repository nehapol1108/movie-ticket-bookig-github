const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const { EMAIL, PASSWORD } = require('../cred.js')
const sendMail = (req, res) => {

    const { userEmail,seatNumber,len,name,mname,time,pic,price } = req.body;
    console.log( userEmail + " " +mname )
    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : name,
            intro: `You have successfully booked  ${len} tickets for the movie ${mname}!`,
            table : {
                data : [
                    {
                        movie : `${mname}`,
                        timings: `${time}`,
                        price : `${price}`,
                    }
                ]
            },
            outro: seatNumber[0]
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : EMAIL,
        to : userEmail,
        subject: `Successfull booked tickets for ${mname}`,
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("getBill Successfully...!");
}
module.exports = {
   sendMail
}