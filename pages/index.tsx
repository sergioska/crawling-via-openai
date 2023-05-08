import React, { useState } from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import FileUpload from '../components/uploader'
import InputKey from '../components/inputkey'
import InputArea from '../components/inputarea'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [openAiKey, updateOpenAiKey] = useState('');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-lg lg:flex">
      <InputKey openAiKey={openAiKey} updateOpenAiKey={updateOpenAiKey} />
      </div>

      <div className="z-10 w-full items-center justify-between font-mono text-lg lg:flex">
        <InputArea openAiKey={openAiKey} updateOpenAiKey={updateOpenAiKey} />
      </div>

      <div>

      </div>
    </main>
  )
}
