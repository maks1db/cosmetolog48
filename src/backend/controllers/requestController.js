const config = require('../config');
const nodemailer = require('nodemailer');

module.exports.send = (req, res) => {
    nodemailer.createTestAccount(() => {

        let transporter = nodemailer.createTransport(config.mail);
        const { name, phone, description } = req.body;
        let mailOptions = {
            from: `"Вологодский лес48" <${config.mail.auth.user}>`, 
            to: config.owner, 
            subject: `${name} ${phone}`,
            html: `<b>Имя:</b> ${name}<br />
                    <b>Телефон:</b> ${phone}<br />
                    <b>Сообщение:</b> ${description}`
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, () => {
            res.json({result: 'ok'});
        });
    });
};