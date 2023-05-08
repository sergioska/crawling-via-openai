import React, { useRef, useState } from "react";
import { Textarea, useInput, Spacer, Button } from "@nextui-org/react";
import Grid from '@mui/material/Grid';
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";
import callOpenAi from "../libs/clientai"; 
import data from "./data/data.json"

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
  );

function InputArea({openAiKey, updateOpenAiKey}: any) {

  // Uncontrolled
  const messageInitRef = React.useRef(null);
  const messageCoreRef = React.useRef(null);
  const messageTargetRef = React.useRef(null);
  const messageResponseRef = React.useRef(null);
  const [messageInit, setMessageInit] = useState(data.init);
  const [messageCore, setMessageCore] = useState(data.sample);
  const [messageTarget, setMessageTarget] = useState(data.target);
  const [messageResponse, setMessageResponse] = useState('');

  const handleMessageInitChanges = event => {
    setMessageInit(event.target.value);
  }
  const handleMessageCoreChanges = event => {
    setMessageCore(event.target.value);
  }
  const handleMessageTargetChanges = event => {
    setMessageTarget(event.target.value);
  }
  const handleMessageResponseChanges = event => {
    setMessageResponse(event.target.value);
  }
  const onPress = async() => {
    if (messageTargetRef.current) {
        setMessageResponse('');
        console.log(messageCore);

        const totalPrompt = messageInit + messageCore + messageTarget;

        const dataInit = await callOpenAi(totalPrompt, openAiKey);
        console.log(dataInit);
        setMessageResponse(dataInit.choices[0].message.content);
    }
  };

  return (
      <Grid container spacing={2} justify="center">
        <Grid item xs={6} md={6} lg={6}>
         <label>init</label>
          <Textarea css={{ width: '100%'}}
            ref={messageInitRef}
            value={messageInit}
            initialValue="know format"
            onChange={handleMessageInitChanges}
          />
         <label>sample</label>
          <Textarea css={{ width: '100%'}}
            ref={messageCoreRef}
            value={messageCore}
            initialValue="know format"
            onChange={handleMessageCoreChanges}
          />
          <Spacer y={0.5} />
          <label>target</label>
          <Textarea css={{ width: '100%'}}
            ref={messageTargetRef}
            value={messageTarget}
            initialValue="current format"
            placeholder="target"
            onChange={handleMessageTargetChanges}
          />
          <Spacer y={0.5} />
          <Button auto color="secondary" onPress={onPress} align="left">
              Generate
          </Button>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
            <label>output</label>
            <CodeEditor css={{ width: '100%'}} rows={13}
                ref={messageResponseRef}
                value={messageResponse}
                language="python"
                placeholder="output"
                initialValue="current format"
                style={{
                    fontSize: 12,
                    backgroundColor: "#333333",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                  }}
            />
        </Grid>
      </Grid>
  );
}

export default InputArea;
