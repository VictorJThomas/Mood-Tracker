const EntryCard = ({ entry }) => {
    const date = new Date(entry.createdAt).toDateString()
    

    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow border-2 border-gray-200">
            <div className="px-4 py-5 sm:px-6 text-lg font-semibold" style={{ background: entry.analysis.color }}>{date}</div>
            <div className="px-4 py-5 sm:px-6">{entry.analysis.summary}</div>
            <div className="px-4 py-5 sm:px-6">{entry.analysis.mood}</div>
        </div>
    )
}

export default EntryCard;