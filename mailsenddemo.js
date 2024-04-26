const nodemailer = require('nodemailer');


const gmailTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'saig949218@gmail.com', //gmail id
        pass: 'ijrn dune rzzz nhmq'  // app password
    }
});


const mailOptions = {
    from: 'saig949218@gmail.com',
    to: 'sai8989b@gmail.com',
    subject: 'MSWD PROJECT TEST MAIL',
    html: '<font color=red>Hello Surya Kiran Garu</font>'
};


gmailTransporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.error('Error sending email through Gmail:', error.message);
    } else {
        console.log('Email Sent Successfully');
    }
});