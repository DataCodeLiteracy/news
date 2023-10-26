import Link from 'next/link'

const NewsList = ({ item }) => {
  return (
    <Link href={`/news/[slug]`} as={`/news/${encodeURIComponent(item.title)}`}>
      <li className="text-white border-white border-2 m-10">
        <div className="mb-10 text-3xl">TITLE : {item.title}</div>
        <div>DESCRIPTION: {item.description}</div>
      </li>
    </Link>
  )
}

export default NewsList
