const axios = require('axios');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = JSON.parse(event.body);
        const response = await axios.post('https://api.openai.com/v1/chat/completions', body, {
            headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Something went wrong. Please try again.' }),
        };
    }
};
