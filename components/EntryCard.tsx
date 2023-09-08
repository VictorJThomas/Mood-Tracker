const EntryCard = ({ entry }) => {
    const date = new Date(entry.createdAt).toDateString()
    

    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-3xl shadow border-2 border-gray-400 hover:scale-105 hover:shadow-zinc-500 w-[550px] mb-4">
            <div className="px-4 py-5 sm:px-6 text-lg font-semibold" style={{ background: entry.analysis.color }}>{date}</div>
            <div className="px-4 py-5 sm:px-6">{entry.analysis.summary}</div>
            <div className="px-2 pt-5 pb-4 sm:px-6">{entry.analysis.mood}</div>
        </div>
    )
}

export default EntryCard;