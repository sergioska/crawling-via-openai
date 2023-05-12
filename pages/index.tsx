import React, { useState } from "react";
import InputKey from '../components/inputkey'
import InputArea from '../components/inputarea'

export default function Home() {
  const [openAiKey, updateOpenAiKey] = useState('');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-lg lg:flex">
      <InputKey openAiKey={openAiKey} updateOpenAiKey={updateOpenAiKey} />
      </div>

      <div className="z-10 w-full items-center justify-between font-mono text-lg lg:flex">
        <InputArea openAiKey={openAiKey} />
      </div>

      <div>

      </div>
    </main>
  )
}
