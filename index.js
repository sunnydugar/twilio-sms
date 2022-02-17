const express       = require('express')
const bodyParser    = require('body-parser');
const twilioUtilities = require('./twilio');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World Base level!')
})

app.post('/sms', (request, response) => {
    const {message, to} = request.body;
    twilioUtilities.sendSMS(message,to);
    return response.send({ statusCode: 200, message: 'Message Sent Successfully' })
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})