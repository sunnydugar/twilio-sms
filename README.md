# twilio-sms


Step 1: Create enviornment variables

  export TWILIO_ACCOUNT_SID= "Your ACCOUNT SID"
  
  export TWILIO_AUTH_TOKEN= "Your AUTH Token"
  
  export TWILIO_SMS_NUMBER= "Your Phone Number"
  
Step 2:
    Command to run the project:   node indexsms.js
    
    
  API call to URL:    http://localhost:3000/sms
  
  METHOD:               POST
  
  PAYLOAD / BODY:       
                            "message": "This is from Postman To api To Twilio to Device",
                             "to": "+12036668689"
                        

Completed Successfully with Message SID received and SMS received to the Phone Number
