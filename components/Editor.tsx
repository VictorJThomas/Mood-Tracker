'use client'

import { updateEntry } from '@/app/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ entry }) => {
  const [value, setvalue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  useAutosave({
    data: value,
    onSave: async( _value) => {
      setIsLoading(true)
        const updated = await updateEntry(entry.id, _value)
        setIsLoading(false)
    }
  })

  return (
    <div className="w-full h-fll">
      {isLoading && <div>...loading</div>}
      <textarea
        className="w-fullh-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
    </div>
  )
}

export default Editor
