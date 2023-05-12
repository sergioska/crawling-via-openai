interface OpenAiResponse {
    data: {
        choices: [
            {
                message: {
                    content: string
                }
            }
        ]
    },
    errors?: Array<{message: string}>
};
const callOpenAi = async(content: {}, openAiKey: string): Promise<OpenAiResponse>  => {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        body: JSON.stringify({
            "model":"gpt-3.5-turbo",
            "messages":[{role:"system", content}],
            "temperature":0.5,
            "stream": false
        }),
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + openAiKey
        },
    }).catch((e) => {
        console.log(e)
        return e;
    });

    const {data, errors}: OpenAiResponse = await res.json();
    return {data, errors};
}

export default callOpenAi;
