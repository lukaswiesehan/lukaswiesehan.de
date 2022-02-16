type TagsProps = {
  tags: string[]
}

export const Tags = ({tags}: TagsProps) => {
  return (
    <ul className="flex flex-wrap text-sm">
      {tags.map((tag, index) => (
        <li key={index} className="mr-1 mt-1.5 rounded-full bg-indigo-100 px-3 py-0.5 font-bold text-indigo-900">
          {tag}
        </li>
      ))}
    </ul>
  )
}
