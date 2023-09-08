import HistoryChart from '@/components/HistoryChart'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
  const user = await getUserByClerkID()
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
        createdAt: 'asc'
    }
  })

  const sum = analyses.reduce((all, current) => all + current.sentimentScore, 0)
  const avg = Math.round(sum / analyses.length)
  let mood = ''
  if(avg >= 6) {
    mood = 'Happy' 
  } else if (avg < 6 && avg > 0 ){
    mood = 'Neutral'
  } else{
    mood = "Sad"
  }
  return { analyses, mood }
}

const History = async () => {
  const { mood, analyses } = await getData()

  return (
    <div className='h-full px-6 py-8 bg-zinc-400/10'>
      <h1 className='text-2xl mb-4'>{`Avg. Mood: ${mood}`}</h1>
      <div className='w-full h-full '>
        <HistoryChart data={analyses} />
      </div>
    </div>
  )
}

export default History
