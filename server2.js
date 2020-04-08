require('dotenv').config()
const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

   
const mailOpitions = {
        from:  '', // email adress which is gonna be sent
        to:   '',   
        subject: 'test and testing',
        text: 'IT works',
        // attachments: [
        //     { filename: './trof.JPG' }
        // ],
        template: 'index'
}

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:  process.env.EMAIL ,
            pass:  process.env.PASSWORD 
        }
    })
    
    let handlebarsOption = {
        viewEngine: {
            partialsDir: './views/partials/',
            defaultLayout: ""
        },
        viewPath: path.resolve(__dirname + '/views/partials/'),
        extName: '.handlebars'
    }
    
    transporter.use('compile', hbs(handlebarsOption))

    setInterval(() => {
        transporter.sendMail(mailOpitions, async (err, data) => {
            if(await data){
                console.log('sucessfully sent')
        
            } 
            else {
                console.log(err)
            }
            
        })
        
    }, 2000);


// // setInterval(() => {
//     console.log(isCard)
//     isCard === true ? isCard === true :  isCard === false 
    
//     !isCard 
//     console.log(isCard)
// }, 5000)
