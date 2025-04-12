interface BlogMetadataProps {
  date: string
  category: string
  readingTime: number
  author: string
}

export default function BlogMetadata({ date, category, readingTime, author }: BlogMetadataProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Publication Date</p>
          <p className="text-gray-800 font-medium">{date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Category</p>
          <p className="text-gray-800 font-medium">{category}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Reading Time</p>
          <p className="text-gray-800 font-medium">{readingTime} min</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Author Name</p>
          <p className="text-gray-800 font-medium">{author}</p>
        </div>
      </div>
    </div>
  )
}
