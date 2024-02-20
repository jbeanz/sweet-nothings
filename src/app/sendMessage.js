import axios from 'axios'

export const sendMessage = (phoneNumber) => {
    axios.post(
        'http://localhost:8080/sendMessage',
        { phoneNumber },
    )
}