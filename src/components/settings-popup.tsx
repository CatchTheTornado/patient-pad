/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/2K8codJtRYE
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useContext, useState } from "react"
import { Dialog, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import NoSSR from 'react-no-ssr';
import { ConfigContext } from "@/contexts/config-context"
import { PasswordInput } from "./ui/password-input"
import { generateEncryptionKey } from "@/lib/crypto"
import ReactToPrint from "react-to-print";
import { KeyPrint } from "./key-print"
import React from "react"


export function SettingsPopup() {
  const config = useContext(ConfigContext);
  let encryptionKey = config?.getLocalConfig('encryptionKey')
  if (!encryptionKey) {
    encryptionKey = generateEncryptionKey();
    config?.setLocalConfig('encryptionKey', encryptionKey);
  }

  const componentRef = React.useRef(null);
  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    return <Button variant="ghost">Print encryption key</Button>;
  }, []);

  let [newEncryptionKey, setEncryptionKey] = useState(encryptionKey);
  let [newChatGptApiKey, setChatGptApiKey] = useState(config?.localConfig.chatGptApiKey || "");

  function handleSubmit(e){
    config?.setLocalConfig('encryptionKey', newEncryptionKey);
    config?.setLocalConfig('chatGptApiKey', newChatGptApiKey);
    //passwordManager(e);
  }

/*  function passwordManager(e) {
    if (window.PasswordCredential) {
      var c = new PasswordCredential({ id: "patient-pad", password: encryptionKey });
      return navigator.credentials.store(c);
    } else return true;            
  }*/
  return (
    <NoSSR>
      <Dialog defaultOpen>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <SettingsIcon className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
          </DialogHeader>
          <form onSubmit={(e) => {e.preventDefault(); handleSubmit(e);}}>
            <div className="space-y-4">
              <div className="grid gap-1">
                  <Label htmlFor="chatGptApiKey">ChatGPT API Key</Label>
                  <Input
                    type="text"
                    id="chatGptApiKey"
                    value={newChatGptApiKey}
                    onChange={(e) => setChatGptApiKey(e.target.value)}
                  />
                  <Link href="https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key" target="_blank" className="text-sm text-blue-500 hover:underline" prefetch={false}>
                    How to obtain ChatGPT API Key
                  </Link>
                </div>
                <div className="grid gap-1">
                <div className="hidden">
                  <KeyPrint ref={componentRef} text={encryptionKey}/>
                </div>
                  <Label htmlFor="encryptionKey">Encryption Key</Label>
                  <PasswordInput  autoComplete="new-password" id="password" value={newEncryptionKey} 
                  onChange={(e) => setEncryptionKey(e.target.value)} />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Please save or print this master key. <strong>It's like crypto wallet.</strong> After losing it your medical records <strong className="text-red-500">WILL BE LOST FOREVER</strong>.
                    We're using strong AES256 end-to-end encryption.
                  </p>
                   <ReactToPrint
                    content={reactToPrintContent}
                    documentTitle="Patient Pad Encryption Key"
                    removeAfterPrint
                    trigger={reactToPrintTrigger}
                  />                  
                </div>
              </div>
              <DialogFooter>
                <div className="flex items-center justify-between gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="saveToLocalStorage"
                      checked={config?.localConfig.saveToLocalStorage}
                      onCheckedChange={(checked) => config?.setSaveToLocalStorage(checked)}
                    />
                    <Label htmlFor="saveToLocalStorage">Save to localStorage</Label>
                  </div>
                  <div className="flex gap-2">
                    <DialogClose asChild>
                      <Button type="button">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button type="submit">Save</Button>
                    </DialogClose>
                  </div>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </NoSSR>
  )
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}