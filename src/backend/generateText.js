import axios from 'axios';

const apiKey = process.env.OPENAI_API_KEY;
const apiUrl = 'https://api.openai.com/v1/completions'

async function generateText(prompt) {
    try {
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 50,
            model: "davinci-002",
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export default generateText;
