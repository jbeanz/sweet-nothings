const axios = require('axios')

require('dotenv').config()

const apiKey = process.env.VONAGE_TEMP_API_KEY
const apiUrl = 'https://api.nexmo.com/v1/calls/'

const sendMessage = ({ phoneNumber }) => {
    axios.post(
        apiUrl,
        {
          "ncco": [
            {
               "action": "talk",
               "text": "Hello World"
            }
         ],
         "to": [
            {
               "type": "phone",
               "number": phoneNumber
            }
         ],
         "random_from_number": true,
        },
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }
    ).catch(
        (err) => {console.error('Error:', err)}
    )
}

module.exports = { sendMessage }