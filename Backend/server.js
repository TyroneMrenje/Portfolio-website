const nodemailer =require('nodemailer')
const express = require('express')
const app = express()
const port = 3000

let transporter =
 nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"",
        pass:""
    }
 })