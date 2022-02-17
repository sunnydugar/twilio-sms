'use strict';
const { request } = require('express');
const   twilio               = require('twilio');
const twilioUtilities        = module.exports = {};
const _internals             = {};

const accountSid             = process.env.TWILIO_ACCOUNT_SID;
const authToken              = process.env.TWILIO_AUTH_TOKEN ;
const fromSMS                = process.env.TWILIO_SMS_NUMBER ;

_internals.getTwilioClient = async function getTwilioClient(){
    return twilio(accountSid, authToken);
}

twilioUtilities.sendSMS= async function sendSMS(body, to){

 let payload = {body: body, from: fromSMS, to: to};

 const client = await _internals.getTwilioClient();

 await client.messages.create(payload).then(message => console.log(message.sid));

}