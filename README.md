# twilio-sms


Step 1: Create enviornment variables

  export TWILIO_ACCOUNT_SID=
  export TWILIO_AUTH_TOKEN=
  export TWILIO_SMS_NUMBER=
  
  Step 2:
    Command to run the project:   npm run start
    
    
  API call to make:     http://localhost:3000/sms
  
  METHOD:               POST
  
  PAYLOAD:              {
                            "message": "This is from Postman To api TO Twilio to Devivce",
                             "to": "+11234567890"
                        }
