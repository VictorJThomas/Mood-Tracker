import { getUserByClerkID } from '@/app/utils/auth'
import { prisma } from '@/app/utils/db'
import Editor from '@/components/Editor'

const getEntry = async (id) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  })

  return entry
}

const EntryPage = async ({ params }) => {
    const entry = await getEntry(params.id)
  return (
    <div className="h-full w-full">
      <Editor entry={entry}/>
    </div>
  )
}

export default EntryPage
