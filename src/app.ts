import express, { Express, Request , Response } from 'express';
import { schema, sendMail } from './util';


const app: Express = express();

// ------------MIDDLEWARE---------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// -----------ROUTES----------------

app.post('/send-mail', async(req:Request , resp:Response) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
        resp.status(400).json({ 
            message: error.details[0].message 
    });
    } else
    {
        try{
            sendMail(
                value.to,
                value.subject,
                value.text
            );
        const message = `Email sucessfully sent!`;
        resp.json({ message });
      }
      catch(err){
            console.log(err);
            const message = `Email not sent`;
            resp.json({ message , err });
      }
    }

});

export default app;

