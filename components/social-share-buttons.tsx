interface SocialShareButtonsProps {
  likes: string
  views: string
  comments: string
}

export default function SocialShareButtons({ likes, views, comments }: SocialShareButtonsProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full">
        <span className="text-orange-500">❤️</span>
        <span className="text-sm text-gray-700 font-medium">{likes}</span>
      </div>
      <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
        <span className="text-gray-500">👁️</span>
        <span className="text-sm text-gray-700 font-medium">{views}</span>
      </div>
      <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
        <span className="text-gray-500">💬</span>
        <span className="text-sm text-gray-700 font-medium">{comments}</span>
      </div>
    </div>
  )
}
