import nodemailer from "nodemailer";
import { Transporter } from "nodemailer";
import Joi from 'joi';
import { config } from "dotenv";

config();

export const transporter: Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
    },
});

export const sendMail = async (
    to: string,
    subject: string,
    text: string
): Promise<any> => {
    try {
        // Send mail with specified options
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: to,
            subject: subject,
            text: text,
        });
        console.log("Email sent: " + info.response);
    } catch (err) {
        console.error(err);
    }
};

export const schema = Joi.object({
    to: Joi.string().email().required(),
    subject: Joi.string().required(),
    text: Joi.string().required(),
});
