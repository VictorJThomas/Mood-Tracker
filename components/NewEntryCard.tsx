'use client'

import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation"

const NewEntryCard = () => {
    const router = useRouter()
    const handleOnClick = async () => {
      try {
        const data = await createNewEntry();

        if (data.id) {
          router.push(`/journal/${data.id}`);
        } else {
          console.error("Failed to create a new entry.");
        }
      } catch (error) {
        console.error("Error creating a new entry:", error);
      }
    }

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-zinc-200 shadow">
      <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
  )
}

export default NewEntryCard
