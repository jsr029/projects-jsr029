const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// nodemailer-smtp-transport is deprecated; nodemailer.createTransport handles this natively
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

/**
 * Handles sending an email notification from a request body.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function sendEmail(req, res) {
    try {
        const { message, firstname, lastname, email } = req.body;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'from projects list website',
            html: `${message}<br/><br/>${firstname} ${lastname} - <b>${email}</b>`,
        });

        return res.status(200).json({ error: "" });
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
}

module.exports = sendEmail;