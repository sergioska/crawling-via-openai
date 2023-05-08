const callOpenAi = async(content, openAiKey) => {
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
    }).catch((e) => console.log(e));

    const data = await res.json();
    return data;
}

export default callOpenAi;
