const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'peter.faucella@gmail.com',
        subject: 'Thank you for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'peter.faucella@gmail.com',
        subject: 'Sorry to see you leave',
        text: `We hope you enjoyed our app, ${name}. Come back soon!`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}