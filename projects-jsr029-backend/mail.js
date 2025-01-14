const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const dotenv = require('dotenv')
dotenv.config();

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
}));


async function sendEmail(req, res) {
    try {
        const response = await transporter.sendMail({
            from: process.env.EMAIL_USER, // sender address
            to: process.env.EMAIL_USER, // list of receivers
            subject: `from projects list website`, // Subject line
            html: `${req.body.message}<br/><br/>${req.body.firstname} ${req.body.lastname} - <b>${req.body.email}</b>`, // html body
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

module.exports = sendEmail;
