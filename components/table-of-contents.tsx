import Link from "next/link"

interface Section {
  id: string
  title: string
  content: string
}

interface TableOfContentsProps {
  sections: Section[]
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 sticky top-20">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Table of Contents</h3>
      <ul className="space-y-3">
        <li>
          <Link href="#introduction" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
            Introduction
          </Link>
        </li>
        {sections.map((section, index) => (
          <li key={index}>
            <Link href={`#${section.id}`} className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              {section.title}
            </Link>
          </li>
        ))}
        <li>
          <Link href="#conclusion" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
            Conclusion
          </Link>
        </li>
      </ul>
    </div>
  )
}
