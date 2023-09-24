'use client'

import { updateEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import Spinner from './Spinner'

interface Analysis {
  mood: string;
  color: string;
  summary: string;
  subject: string;
  negative: boolean;
}

interface Entry {
  id: string;
  content: string;
  analysis: Analysis;
}

interface EditorProps {
  entry: Entry;
}

const Editor: React.FC<EditorProps> = ({ entry } ) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState(entry.analysis)

  const { mood, summary, subject, negative } = analysis
  const analysisData = [
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Negative', value: negative ? 'True' : 'False' },
  ]

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    },
  })
  return (
    <div className="w-full h-full grid grid-cols-3 gap-0 relative ">
      <div className="absolute left-0 top-0 p-2">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
        )}
      </div>
      <div className="col-span-2">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-full text-xl p-8 d"
        />
      </div>
      <div className="border-l rounded-3xl border-black/5">
        <div
          style={{ background: analysis.color }}
          className="h-[100px] text-white p-8"
        >
          <h2 className="text-2xl text-black">Analysis</h2>
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="px-2 py-4 flex items-ceter justify-between border-b border-t border-black/10"
              >
                <span className="text-xl font-semibold w-1/3">{item.name}</span>
                <span className="text-xl">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
