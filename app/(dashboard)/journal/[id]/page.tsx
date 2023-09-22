import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

interface EntryPageProps  {
  params:{
    id: string;
  }
}

const getEntry = async (id: string) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    }
  })

  return entry
}

const EntryPage: React.FC<EntryPageProps> = async ({ params }) => {

  const entry = await getEntry(params.id)
  console.log(entry);
  return (
    <div className="w-full bg-zinc-400/10">
        <Editor entry={entry} />      
    </div>
  )
}

export default EntryPage
