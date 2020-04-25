const express = require('express');
const app = express();

app.use(express.json());


const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

app.get('/send', async (req, res) => {
    client.messages
        .create({
            body: 'Why do the humans can\'t understand each other?',
            from: '+12056277647',
            to: '+18295775078'
        })
        .then(message => {
            res.status(200)
                .send({
                    message
                })
        }).catch(err => {
            res.send(err);
    })
});

app.listen(8080, () => {
    console.info('App listening on port 8080!');
})
