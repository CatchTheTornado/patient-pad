/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/EquIyT0217c
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
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export function PatientPad() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[300px_1fr] bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
        <div className="sticky top-0 p-4 border-b border-gray-200 dark:border-gray-800">
          <Input
            className="w-full rounded-md bg-gray-100 dark:bg-gray-800 border-none focus:ring-0"
            placeholder="Search patients..."
          />
        </div>
        <div className="h-[calc(100vh-64px)] overflow-auto">
          <div className="p-4 space-y-4">
            <Link
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="#"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage alt="Patient" src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Last visit: 2 days ago</div>
              </div>
            </Link>
            <Link
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="#"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage alt="Patient" src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Jane Appleseed</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Last visit: 1 week ago</div>
              </div>
            </Link>
            <Link
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="#"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage alt="Patient" src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Sarah Miller</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Last visit: 3 days ago</div>
              </div>
            </Link>
            <Link
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="#"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage alt="Patient" src="/placeholder-user.jpg" />
                <AvatarFallback>RJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Robert Johnson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Last visit: 1 month ago</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col">
        <div className="flex-1 overflow-auto">
          <div className="grid gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">John Doe</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Last visit: 2 days ago</div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Memo</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2 days ago</div>
                  </div>
                  <div className="mt-2 text-sm">
                    Patient reported mild headache and fatigue. Recommended over-the-counter medication and follow-up in
                    3 days.
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <PaperclipIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Visit</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">1 week ago</div>
                  </div>
                  <div className="mt-2 text-sm">
                    Routine checkup. Patient is in good health. Recommended annual follow-up.
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <PaperclipIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">Jane Appleseed</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Last visit: 1 week ago</div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Results</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">1 week ago</div>
                  </div>
                  <div className="mt-2 text-sm">
                    Blood test results within normal range. No further action required.
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <PaperclipIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <Textarea
              className="flex-1 resize-none border-none focus:ring-0"
              placeholder="Add a new note..."
              rows={2}
            />
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Note type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="memo">Memo</SelectItem>
                <SelectItem value="visit">Visit</SelectItem>
                <SelectItem value="results">Results</SelectItem>
              </SelectContent>
            </Select>
            <Button size="icon" variant="ghost">
              <PaperclipIcon className="w-4 h-4" />
            </Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PaperclipIcon(props) {
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
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function Trash2Icon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}
