'use client'

import { createNewEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'

const NewEntryCard = () => {
  const router = useRouter()
  const handleOnClick = async () => {
    try {
      const data = await createNewEntry()

      if (data.id) {
        router.push(`/journal/${data.id}`)
      } else {
        console.error('Failed to create a new entry.')
      }
    } catch (error) {
      console.error('Error creating a new entry:', error)
    }
  }

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-zinc-200 shadow hover:bg-zinc-300 hover:scale-105">
      <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 40 25"
            strokeWidth={2}
            stroke="currentColor"
            className="w-20 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default NewEntryCard
